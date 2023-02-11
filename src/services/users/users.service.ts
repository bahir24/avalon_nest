import {Injectable, Param} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from '../../shemas/user';
import {Model} from 'mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async getAllUsers(): Promise<User[]> {
        return this.userModel.find();
    }

    async getUserById(id): Promise<User> {
        return this.userModel.findById(id);
    }

    async sendUser(data): Promise<User> {
        const userData = new this.userModel(data);
        return userData.save();
    }

    async updateUsers(id: string, body): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, body);
    }

    async deleteAllUsers(): Promise<User[]> {
        return this.userModel.remove();
    }

    async deleteUserById(id: string): Promise<User> {
        return this.userModel.findByIdAndRemove(id);
    }
}
