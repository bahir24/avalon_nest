import { UsersService } from '../../services/users/users.service';
import { UserDto } from '../../dto/UserDto';
import { User } from '../../shemas/user';
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
  constructor(private userService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post()
  sendUser(@Body() data: UserDto): Promise<User> {
    return this.userService.checkRegUser(data.login).then((queryRes) => {
      console.log('data reg', data);
      if (queryRes.length === 0) {
        return this.userService.sendUser(data);
      } else {
        console.log('err - user is exists');
        return Promise.reject();
      }
    });
  }

  @Post(':login')
  authUser(
    @Body() data: UserDto,
    @Param('login') login,
  ): Promise<User | boolean> {
    return this.userService
      .checkAuthUser(data.login, data.psw)
      .then((queryRes) => {
        if (queryRes.length !== 0) {
          return Promise.resolve(true);
        } else {
          console.log('err - user is exists');
          return Promise.reject();
        }
      });
  }

  @Put(':id')
  updateUsers(@Param('id') id, @Body() data): Promise<User> {
    return this.userService.updateUsers(id, data);
  }

  @Delete()
  deleteUsers(): Promise<User> {
    return this.userService.deleteUsers();
  }

  @Delete(':id')
  deleteUserById(@Param('id') id): Promise<User> {
    return this.userService.deleteUserById(id);
  }
}
