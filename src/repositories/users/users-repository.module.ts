import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { UsersRepositoryService } from './users-repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersRepositoryService],
  exports: [UsersRepositoryService],
})
export class UsersRepositoryModule {}
