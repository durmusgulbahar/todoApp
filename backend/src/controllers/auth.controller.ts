import {Request, Response} from "express";
import AuthService from "../services/auth.service";

class AuthController {
    private authService:AuthService;

    constructor(){
        this.authService = new AuthService();
    }

    async register(req:Request, res:Response):Promise<void>{
        try {
            const user  = req.body;
            const newUser = await this.authService.register(user);
            res.status(201).json({message:"User created successfully", data:newUser});

        } catch (error) {
            res.status(500).json({message:"Error while registering", error:error});
        }
    }

    async login(req:Request, res:Response): Promise<void>{
        try {
            const {email, password} = req.body;
            const token  =  await this.authService.login(email, password);
            res.status(200).send({token});
        } catch (error) {
            res.status(400).send({ message: 'Error logging in', error });
        }
    }
}
export default AuthController;