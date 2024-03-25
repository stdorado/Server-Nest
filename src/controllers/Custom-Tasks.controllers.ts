import { Controller, Get, Post , Body } from '@nestjs/common';
import { Task } from '../model/Custom-Models.models';
import { CustomTasksService } from '../services/Custom-Models.Services';

@Controller('tasks')
export class CustomTaskController {
  constructor(private readonly tasksService: CustomTasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }


  @Post()
  createTask(@Body() taskData: Task): Task {
    return this.tasksService.createTask(taskData);
  }
}
