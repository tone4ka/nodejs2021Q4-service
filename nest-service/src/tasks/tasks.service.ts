import { BoardsService } from './../boards/boards.service';
import { Inject, forwardRef, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import Task from './entities/task.entity'

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
    @Inject(forwardRef(() => BoardsService))
    private boardsService: BoardsService
  ) {}

  async create(createTaskDto: CreateTaskDto, boardId: string) {
    const board = await this.boardsService.findOne(boardId);
    if (!board) {
      throw new HttpException('No board with this ID found', 404);
    }
    const task = await this.tasksRepository.save(createTaskDto);
    return task;
  }

  async findAll(boardId: string) {
    const board = await this.boardsService.findOne(boardId);
    if (!board) {
      throw new HttpException('No board with this ID found', 404);
    }
    const tasks = await this.tasksRepository.find({boardId});
    return tasks;
  }

  async findOne(id: string, boardId: string) {
    const board = await this.boardsService.findOne(boardId);
    if (!board) {
      throw new HttpException('No board with this ID found', 404);
    }
    const task = await this.tasksRepository.findOne(id);
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto, boardId: string) {
    const board = await this.boardsService.findOne(boardId);
    if (!board) {
      throw new HttpException('No board with this ID found', 404);
    }
    await this.tasksRepository.update(id, updateTaskDto);
    const task = await this.tasksRepository.findOne(id);
    return task;
  }

  async updateUserId(userId: string, newUserId: string | null) {
    await this.tasksRepository.update({userId}, {userId: newUserId});
  };

  async remove(id: string, boardId: string) {
    const board = await this.boardsService.findOne(boardId);
    if (!board) {
      throw new HttpException('No board with this ID found', 404);
    }
    await this.tasksRepository.delete(id);
    return `Task ${id} has been deleted`;
  }
}
