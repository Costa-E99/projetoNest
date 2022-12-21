import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from 'src/services/task.service';
import { TasksController } from 'src/controllers/task.controller';
import { Module } from '@nestjs/common';
import { TaskSchema } from 'src/schemas/task.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TaskService],
})
export class TaskModules {}
