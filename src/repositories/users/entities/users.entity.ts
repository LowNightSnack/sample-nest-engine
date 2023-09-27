import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}
