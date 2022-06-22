/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory, Reflector } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const logger = new Logger('Main');
  const globalPrefix = 'api';
  const docGlobalPrefix = 'documentation';

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(globalPrefix);

  app.enableCors({
    origin: '*',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    })
  );

  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  const config = new DocumentBuilder()
    .setTitle('OMS API documentation')
    .setDescription('Документация для панели управления kinopoisk.dev.')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(docGlobalPrefix, app, document);

  const port = process.env.PORT || 3334;
  await app.listen(port);
  logger.log(
    `🚀 OMS app is running on: http://localhost:${port}/${globalPrefix}`
  );
  logger.log(
    `📑 OMS documentation is running on: http://localhost:${port}/${docGlobalPrefix}`
  );
}

bootstrap();
