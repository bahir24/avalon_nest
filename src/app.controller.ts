import {Controller, Delete, Get, Post, Put} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return 'Hi chuvak';
  }

  @Post()
  sendAll(): string {
    return 'post data';
  }

  @Put()
  update(): string {
    return 'update data';
  }

  @Delete()
  delete(): string {
    return 'delete data';
  }
}
