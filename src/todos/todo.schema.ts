import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type TodoDocument = HydratedDocument<Todo>;

@Schema()
export class Todo {
  @ApiProperty()
  @Prop()
  task: string;

  @ApiProperty({ required: false })
  @Prop({ default: false })
  isDone: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
