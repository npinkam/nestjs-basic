"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const todos_mock_1 = require("../mock/todos.mock");
const mapper_1 = require("../shared/mapper");
const util_1 = require("../shared/util");
const uuid_1 = require("uuid");
let TodoService = class TodoService {
    constructor() {
        this.todos = todos_mock_1.todos;
    }
    async getAllTodo() {
        return (0, util_1.toPromise)(this.todos.map((todo) => (0, mapper_1.toTodoDto)(todo)));
    }
    async getOneTodo(id) {
        const todo = this.todos.find((todo) => todo.id == id);
        if (!todo) {
            throw new common_1.HttpException(`Todo item does not exist!`, common_1.HttpStatus.BAD_REQUEST);
        }
        return (0, util_1.toPromise)((0, mapper_1.toTodoDto)(todo));
    }
    async createTodo(todoDto) {
        const { name, description } = todoDto;
        const todo = {
            id: (0, uuid_1.v4)(),
            name,
            description,
        };
        this.todos.push(todo);
        return (0, util_1.toPromise)((0, mapper_1.toTodoDto)(todo));
    }
    async updateTodo(id, todoDto) {
        const { name, description } = todoDto;
        let todo = todos_mock_1.todos.find((todo) => todo.id == id);
        if (!todo) {
            throw new common_1.HttpException(`Todo item does not exist!`, common_1.HttpStatus.BAD_REQUEST);
        }
        todo = {
            id: id,
            name,
            description,
        };
        this.todos = this.todos.filter((todo) => todo.id != id);
        this.todos.push(todo);
        return (0, util_1.toPromise)((0, mapper_1.toTodoDto)(todo));
    }
    async destroyTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (!todo) {
            throw new common_1.HttpException(`Todo item does not exist!`, common_1.HttpStatus.BAD_REQUEST);
        }
        this.todos = this.todos.filter((todo) => todo.id !== id);
        return (0, util_1.toPromise)((0, mapper_1.toTodoDto)(todo));
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map