import { Document } from 'mongoose';
export declare type TaskDocument = Task & Document;
export declare class Task {
    name: string;
    description: string;
}
export declare const TaskSchema: import("mongoose").Schema<Document<Task, any, any>, import("mongoose").Model<Document<Task, any, any>, any, any>, {}>;
