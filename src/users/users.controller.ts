import {Controller, Get, Post, Put, Delete, Param} from '@nestjs/common';

@Controller('user')
export class UsersController {
    @Get()
    getAllUsers(): string {
        return 'User chuvak';
    }

    @Get(":id")
    getUserById(@Param() param): string {
        return "user id is " + param.id;
    }
    
    @Post()
    sendAll(): string {
        return 'post user';
    }

    @Put()
    updateUser(): string {
        return 'update user';
    }

    @Delete()
    deleteUser(): string {
        return 'delete user';
    }
}
