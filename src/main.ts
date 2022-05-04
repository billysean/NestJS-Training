import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // create new nestjs application
  const app = await NestFactory.create(AppModule);
  // apply ValidationPipes to all routes that is injected with class-validator
  app.useGlobalPipes(new ValidationPipe());
  // new nestjs application listens on port 3000
  await app.listen(3000);
}
bootstrap();
