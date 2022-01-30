import { TasksService } from './../tasks/tasks.service';
import { Inject, forwardRef, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import Board from './entities/board.entity'

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardsRepository: Repository<Board>,
    @Inject(forwardRef(() => TasksService))
    private tasksService: TasksService
  ) {}

  async create(createBoardDto: CreateBoardDto) {
    const board = await this.boardsRepository.save(createBoardDto);
    return board;
  }

  async findAll() {
    const boards = await this.boardsRepository.find();
    return boards;
  }

  async findOne(id: string) {
    const board = await this.boardsRepository.findOne(id);
    return board;
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    await this.boardsRepository.update(id, updateBoardDto);
    const board = await this.boardsRepository.findOne(id);
    return board;
  }

  async remove(id: string) {
    const tasks = await this.tasksService.findAll(id)    
    if(tasks){
      let i = 0;
      while (i < tasks.length) {
        await this.tasksService.remove(tasks[i].id, id)
        i +=1;
      }
    }
    await this.boardsRepository.delete(id);
    return `Board ${id} has been deleted`;
  }
}
