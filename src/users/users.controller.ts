import {User} from '../shemas/user';
import {UsersService} from "../services/users/users.service";
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Get()
    getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUserById(id): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Post()
    sendUser(@Body() data): Promise<User> {
        console.log(data);
        return this.userService.sendUser(data);
    }

    @Put(":id")
    updateUsers(@Param('id') id, @Body() data): Promise<User> {
        return this.userService.updateUsers(id, data);
    }

    @Delete()
    deleteAllUsers(): Promise<User[]> {
        return this.userService.deleteAllUsers();
    }

    @Delete(':id')
    deleteUserById(@Param('id') id): Promise<User> {
        return this.userService.deleteUserById(id);
    }
}
