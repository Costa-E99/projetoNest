import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModules } from './task.module';
@Module({
  imports: [
    // MongooseModule.forRoot('mongodb+srv://eduardo2:1599877411233690@cluster0.oss8krr.mongodb.net/?',),
    MongooseModule.forRoot(
      'mongodb+srv://eduardo2:1599877411233690@cluster0.oss8krr.mongodb.net/save-up',
    ),
    TaskModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
