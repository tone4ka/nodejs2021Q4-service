import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

const {USE_FASTIFY} = process.env;

const {PORT} = process.env;

async function bootstrap() {
  if(USE_FASTIFY === 'true') {
    console.log('Fastify app creation')
      const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
      );
      await app.listen(PORT || 3000, '0.0.0.0');
  } else {
    console.log('Express app creation')
    const app = await NestFactory.create(AppModule);
    await app.listen( PORT || 3000);
  }
  console.log(`App is running on http://localhost:${PORT}`)
}
bootstrap();
