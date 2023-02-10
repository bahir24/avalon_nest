import {Injectable} from '@nestjs/common';

@Injectable()
export class UsersService {
    getAllUsers(id?: string): string {
        return 'service User chuvak' + id;
    }
    
    getUserById(id): string {
        return 'service user id is ' + id;
    }
    
    sendAll(): string {
        return 'service post user';
    }
    
    updateUser(): string {
        return 'service update user';
    }
    
    deleteAllUsers(): string {
        return 'service delete all users';
    }
    
    deleteUserById(id: string): string {
        return 'service user with id ' + id + ' deleted';
    }
}
