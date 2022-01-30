import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import CreateUserDto from '../users/dto/create-user.dto';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  }

}
