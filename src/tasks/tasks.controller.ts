// Path Logic Mapping Operations

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto, updateTaskStatusDto } from './DTO/create-task.dto';
import { GetTaskFilterDto } from './DTO/get-task-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // // http://localhost:3000/tasks
  @Get()
  getTasks(@Query() filterDto: GetTaskFilterDto): Promise<Task[]> {
    return this.taskService.getTasks(filterDto);
  }

  // // http://localhost:3000/tasks/abcdef
  @Get(':id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Delete(':id')
  deleteTaskById(@Param('id') id: string): Promise<void> {
    return this.taskService.deleteTaskById(id);
  }

  @Patch('/:id/status')
  updateTaskById(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: updateTaskStatusDto,
    // TaskStatus enum is not validating status input
  ): Promise<Task> {
    const { status } = updateTaskStatusDto;
    return this.taskService.updateTaskById(id, status);
  }

  @Post()
  /* use DTO for minimum refractoring */
  createNewTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(createTaskDto);
  }
}
