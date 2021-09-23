import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { TaskDocument } from './schemas/task.schema';
export declare class TaskService {
    private TaskModel;
    constructor(TaskModel: Model<TaskDocument>);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(): Promise<(import("./schemas/task.schema").Task & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(_id: string): Promise<import("./schemas/task.schema").Task & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(_id: string, updateTaskDto: UpdateTaskDto): Promise<import("mongodb").UpdateResult>;
    remove(_id: string): Promise<import("mongodb").DeleteResult>;
}
