import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5455,
      username: 'postgres',
      password: 'postgresql',
      database: 'task-management',
      autoLoadEntities: true, // NestJs entities needs to be defined. autoload will find the entity files automatically
      synchronize: true,
    }),
  ],
})
export class AppModule {}
