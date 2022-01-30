import { TasksModule } from './../tasks/tasks.module';
import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { AuthModule } from './../auth/auth.module';
import Board from './entities/board.entity'


@Module({
  imports: [
    forwardRef(() => TasksModule),
    TypeOrmModule.forFeature([Board]),
    AuthModule,
  ],
  exports: [
    TypeOrmModule,
    BoardsService
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
