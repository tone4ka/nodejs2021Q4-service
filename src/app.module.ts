import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { ColumnsModule } from './columns/columns.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.TYPEORM_HOST /* 'localhost' */,
    port: Number(process.env.TYPEORM_PORT) || 5432,
    username: process.env.TYPEORM_USERNAME || 'postgres',
    password: process.env.TYPEORM_PASSWORD || 'password',
    database: process.env.TYPEORM_DATABASE || 'postgres',
    autoLoadEntities: true,
    entities: ['dist/**/entities/*entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    migrations: ['dist/migration/*{.ts,.js}'],
    cli: {
      migrationsDir: 'dist/migration'
  }
  }), UsersModule, BoardsModule, ColumnsModule, TasksModule, AuthModule,
],
  controllers: [/* AppController */],
  providers: [/* AppService */],
})
export class AppModule {}
