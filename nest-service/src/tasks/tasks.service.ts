import { Injectable } from '@nestjs/common';
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
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = await this.tasksRepository.save(createTaskDto);
    return task;
  }

  async findAll() {
    const tasks = await this.tasksRepository.find();
    return tasks;
  }

  async findOne(id: string) {
    const task = await this.tasksRepository.findOne(id);
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    await this.tasksRepository.update(id, updateTaskDto);
    const task = await this.tasksRepository.findOne(id);
    return task;
  }

  async remove(id: string) {
    await this.tasksRepository.delete(id);
    return `Task ${id} has been deleted`;
  }
}
