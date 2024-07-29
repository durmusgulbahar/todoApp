import { Request, Response } from "express";
import IUser from "../interfaces/IUser";

import UserService from "../services/user.service";

class UserController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }
  async create(req: Request, res: Response) {
    try {
      const data: IUser = req.body;
      const user = await this.userService.create(data);
      res.status(201).json(user);
    } catch (error: unknown) {
      throw new Error(error as string);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await this.userService.findAll();
      res.status(200).json(users);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  //
  async findById(req:Request, res:Response) {
    try {
      const data: string = req.params.id;
      const user = await this.userService.findById(data);
      res.status(200).json(user);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async update(req:Request, res:Response){
    try {
      //id and user id must be same
      const data:IUser = req.body;
      const id : string = req.params.id;
      const updatedUser = await this.userService.update(id, data);
      if (!updatedUser) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({error:error, message: 'Internal Server Error' });
    }
  }
  async delete(req:Request, res:Response){
    try {

      const id:string = req.params.id;
      await this.userService.delete(id);
      res.status(200).json({message:"User deleted successfully!"})
    } catch (error) {
      res.status(500).json({error:error})
      throw new Error(error as string);
    }
  }
  async findByEmail(req:Request, res:Response){
    try {
        const email:string = req.body.email;
        const user = await this.userService.findByEmail(email);
        res.status(200).json({user});

    } catch (error) {
      res.status(500).json({error:error})
     
    }
  }
  async findByName(req:Request, res:Response){
    try {
      const name:string = req.body.name;
      const user = await this.userService.findByName(name);
      res.status(200).json({user});

    } catch (error) {
      res.status(500).json({error:error})
      throw new Error(error as string);
    }
  }
}

export default UserController;
