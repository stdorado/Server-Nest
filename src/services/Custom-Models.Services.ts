import { Injectable } from '@nestjs/common';
import { Task } from '../model/Custom-Models.models';

@Injectable()
export class CustomTasksService {
  private tasks: Task[] = []; 

  getAllTasks(): Task[] {
    return this.tasks; 
}

createTask(taskData: Task): Task {
  const newTask: Task = {
    ...taskData,
    id: (this.tasks.length + 1).toString(),
  };
  this.tasks.push(newTask);
  return newTask;
}

}