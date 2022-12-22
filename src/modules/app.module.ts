import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TaskModules } from './task.module';
import { UsuarioModules } from './usuario.module';

import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI),
    TaskModules,
    UsuarioModules,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
