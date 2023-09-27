import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from './entities/users.entity';

@Injectable()
export class UsersRepositoryService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepo: Repository<UsersEntity>,
  ) {}

  public async getAllUsers(): Promise<UsersEntity[]> {
    return await this.userRepo.find({});
  }
}
