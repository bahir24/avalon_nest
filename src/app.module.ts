import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToursController } from './controllers/tours/tours.controller';
import { UsersModule } from './controllers/users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, ToursController],
  providers: [AppService],
})
export class AppModule {}
