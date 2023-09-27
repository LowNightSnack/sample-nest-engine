import { Injectable } from '@nestjs/common';
import { UsersRepositoryService } from 'src/repositories/users/users-repository.service';

@Injectable({})
export class AuthService {
  constructor(private readonly userRepo: UsersRepositoryService) {}
  health(): object {
    return { health: 1 };
  }
  async getAllUsers() {
    return this.userRepo.getAllUsers();
  }
  signup() {
    return { hey: 'hello' };
  }
  signin() {
    return { hey: 'sign in' };
  }
}
