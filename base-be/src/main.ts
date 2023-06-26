import { NestFactory } from '@nestjs/core';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { FastifyAdapter  } from '@nestjs/platform-fastify';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter(),
    {
      snapshot: true,
      abortOnError: false,
    },
  );
  const config = new DocumentBuilder()
    .setTitle('Base Swagger')
    .setDescription('The base API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access_token',
    )
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };
  app.enableCors();
  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000, '0.0.0.0');

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
