"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_entity_1 = require("./entities/task.entity");
let TaskService = class TaskService {
    constructor(TaskModel) {
        this.TaskModel = TaskModel;
    }
    async create(createTaskDto) {
        return new this.TaskModel(createTaskDto).save();
    }
    async findAll() {
        return await this.TaskModel.find();
    }
    async findOne(_id) {
        return await this.TaskModel.findOne({ _id });
    }
    async update(_id, updateTaskDto) {
        return await this.TaskModel.updateOne({ _id }, { $set: Object.assign({}, updateTaskDto) });
    }
    async remove(_id) {
        return await this.TaskModel.deleteOne({ _id });
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_entity_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map