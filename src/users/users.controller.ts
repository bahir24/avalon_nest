import {Controller, Get, Post, Put, Delete, Param, Query} from '@nestjs/common';
import {UsersService} from "../services/users/users.service";

@Controller('user')
export class UsersController {
    constructor(private userService: UsersService) {}
    
    @Get()
    getAllUsers(@Query("id") id: string): string {
        return this.userService.getAllUsers(id);
    }

    @Get(":id")
    getUserById(@Param('id') id: string): string {
        return this.userService.getUserById(id);
    }
    
    @Post()
    sendAll(): string {
        return this.userService.sendAll();
    }

    @Put()
    updateUser(): string {
        return this.userService.updateUser();
    }

    @Delete()
    deleteAllUsers(): string {
        return this.userService.deleteAllUsers();
    }

    @Delete(":id")
    deleteUserById(@Param('id') id): string {
        return this.userService.deleteUserById(id);
    }
}
