import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import Board from './entities/board.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  exports: [TypeOrmModule],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
