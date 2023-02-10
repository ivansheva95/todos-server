import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.schema';
import { TodosService } from './todos.service';

@ApiTags('todos')
@Controller('api/todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Get All Todos',
    type: [Todo],
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get One Todo by Id',
    type: Todo,
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  findOne(@Param('id') id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Create Todo',
    type: [Todo],
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  create(@Body() body: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(body);
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Update task Todo by Id',
    type: [Todo],
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  update(@Param('id') id: string, @Body() body: UpdateTodoDto): Promise<Todo> {
    return this.todoService.update(id, body);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Update isDone Todo by Id',
    type: [Todo],
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  change(@Param('id') id: string): Promise<Todo> {
    return this.todoService.change(id);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Delete Todo by Id',
    type: [Todo],
  })
  @ApiResponse({
    status: 404,
    description: 'Not Found',
  })
  remove(@Param('id') id: string): Promise<Todo> {
    return this.todoService.remove(id);
  }
}
