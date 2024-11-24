import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todosRepository: Repository<Todo>
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  async create(todo: Partial<Todo>): Promise<Todo> {
    return this.todosRepository.save(todo);
  }
}
