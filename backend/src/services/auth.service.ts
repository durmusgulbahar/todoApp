import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import IUser from "../interfaces/IUser";
import UserRepository from "../repository/user.repository";

class AuthService{
    private readonly userRepository:UserRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }

    async register(user:IUser) : Promise<IUser> {
        const hashedPassword : string = await bcrypt.hash(user.password,16);
        user.password = hashedPassword;
        return await this.userRepository.create(user);
    }

    async login(email:string, password:string){
        const user  = await this.userRepository.findByEmail(email);
        if (!user){
          throw new Error("User not found");
        }
    
        const validPassword = await bcrypt.compare(password, user?.password);
        if(!validPassword){
            throw new Error("Invalid Password");
        }
    
        const token = jwt.sign({_id:user?.id, email:user?.email}, process.env.JWT_TOKEN_SECRET!,{
          expiresIn:'1h'
        });
    
        return token;
      }
}

export default AuthService;