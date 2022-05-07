import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  // inject dependency to task module
  imports: [TypeOrmModule.forFeature([TasksRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
