import IUser from "../interfaces/IUser";
import User from "../models/user.model";
import GenericRepository from "./generic.repository";

class UserRepository extends GenericRepository<IUser> {
  constructor() {
    super(User);
  }

  // create custom methods for user repository
  async findByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email:email });
  }

  async findByName(name: string): Promise<IUser | null> {
    return User.findOne({ name:name });
  }
  
}

export default UserRepository;
