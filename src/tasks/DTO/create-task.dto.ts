/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

export class updateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
