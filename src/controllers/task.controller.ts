import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
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
  async getById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getById(id);
  }
  @Post()
  async created(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }
  @Put(':id')
  async updated(@Param('id') id: string, @Body() task: Task): Promise<Task> {
    task.id = id;
    return this.taskService.updated(id, task);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.taskService.deletar(id);
  }
}
