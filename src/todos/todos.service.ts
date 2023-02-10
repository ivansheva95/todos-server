import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './todo.schema';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return await this.todoModel.findById({ _id: id }).exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return await (await this.todoModel.create(createTodoDto)).save();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.todoModel
      .findByIdAndUpdate({ _id: id }, updateTodoDto)
      .exec();
  }

  async change(id: string): Promise<Todo> {
    const findTodo = await this.todoModel.findById({ _id: id });
    findTodo.isDone = !findTodo.isDone;
    return await this.todoModel
      .findByIdAndUpdate({ _id: id }, { ...findTodo })
      .exec();
  }

  async remove(id: string): Promise<Todo> {
    return await this.todoModel.findByIdAndRemove({ _id: id }).exec();
  }
}
