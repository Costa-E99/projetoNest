import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from 'src/classes/task';
import { TaskService } from 'src/services/task.service';

@Controller('/tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Task> {
    return this.taskService.getById(id);
  }
  @Post()
  async created(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }
  @Put(':id')
  async updated(@Param('id') id: number, @Body() task: Task): Promise<Task> {
    task.id = id;
    return this.taskService.updated(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.taskService.deletar(id);
  }
}
