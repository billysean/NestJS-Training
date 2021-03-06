/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './DTO/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { GetTaskFilterDto } from './DTO/get-task-filter.dto';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = this.create({
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);
    return task;
  }

  async getTasks(filterDto: GetTaskFilterDto): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(LOWER(task.title) LIKE LOWER(:search) OR LOWER(task.description) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    const tasks = await query.getMany();
    // console.log(query);
    // console.log(tasks);
    return tasks;
  }
}
