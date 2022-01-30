import { TasksService } from './../tasks/tasks.service';
import { Inject, forwardRef, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import User from './entities/user.entity'

function getUserPublicData(user: User) {
  const {id, name, login} = user
  return {id, name, login}
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(forwardRef(() => TasksService))
    private tasksService: TasksService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(
      createUserDto.password,
      10 
    );
    createUserDto.password = hashPassword
    const user = await this.usersRepository.save(createUserDto);
    return getUserPublicData(user);
  }

  async findAll() {
    const users = await this.usersRepository.find();
    return users.map((user) => getUserPublicData(user)); 
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne(id);
    return getUserPublicData(user);
  }

  async findByLogin(login: string) {
    const user = await this.usersRepository.findOne({login});
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const newUserData = updateUserDto;
    const hashPassword = await bcrypt.hash(
      newUserData.password,
      10 
    );
    newUserData.password = hashPassword
    await this.usersRepository.update(id, newUserData);
    const user = await this.usersRepository.findOne(id);
    return getUserPublicData(user);
  }

  async remove (id: string) {
    await this.tasksService.updateUserId(id, null)
    await this.usersRepository.delete(id);
    return `User ${id} has been deleted`;
  }
}
