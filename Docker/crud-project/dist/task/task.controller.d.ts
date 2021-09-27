/// <reference types="mongoose" />
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto): Promise<import("./entities/task.entity").Task>;
    findAll(): Promise<(import("./schemas/task.schema").Task & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findOne(id: string): Promise<import("./schemas/task.schema").Task & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("mongodb").UpdateResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
