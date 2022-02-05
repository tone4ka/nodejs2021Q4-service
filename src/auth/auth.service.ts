import * as bcrypt from 'bcryptjs';
import { Inject, forwardRef, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import User from 'src/users/entities/user.entity';
import CreateUserDto from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {

  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    private jwtService: JwtService
    ) {}

  async login(createUserDto: CreateUserDto) {
    let candidate = await this.usersService.findByLogin(createUserDto.login);
    if(!candidate) {
      throw new HttpException('invalid login or password***', 403)
    }
    candidate = await this.validateUser(createUserDto);
    return this.generateToken(candidate);
  }

  private async generateToken(user: User) {
    const payload = {login: user.login, id: user.id};
    return {
      token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(createUserDto: CreateUserDto) {
    const user = await this.usersService.findByLogin( createUserDto.login)
    const password = await bcrypt.compare(createUserDto.password, user.password);
    if(!password) {
      throw new UnauthorizedException({message: 'invalid login or password'})
      
    }
    return user
  }

}
