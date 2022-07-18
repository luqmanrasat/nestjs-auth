import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'user1',
      username: 'username1',
      password: 'pass1',
    },
    {
      id: 2,
      name: 'user2',
      username: 'username2',
      password: 'pass2',
    },
    {
      id: 3,
      name: 'user3',
      username: 'username3',
      password: 'pass3',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
