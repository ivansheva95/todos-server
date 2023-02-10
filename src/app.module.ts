import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.qehbvfl.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
