import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TaskDocument } from './schemas/task.schema';

@Injectable()
export class TaskService {

  constructor(@InjectModel(Task.name) private TaskModel: Model<TaskDocument>) { }

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    return new this.TaskModel(createTaskDto).save();
  }

  async findAll() {
    return await this.TaskModel.find();
  }

  async findOne(_id: string) {
    return await this.TaskModel.findOne({ _id })
  }

  async update(_id: string, updateTaskDto: UpdateTaskDto) {
    return await this.TaskModel.updateOne({ _id }, { $set: { ...updateTaskDto } });
  }

  async remove(_id: string) {
    return await this.TaskModel.deleteOne({ _id });
  }
}
