import { TodoCreateDto } from './dto/todo.create.dto';
import { TodoDto } from './dto/todo.dto';
import { TodoListDto } from './dto/todo.list.dto';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<TodoListDto>;
    findOne(id: string): Promise<TodoDto>;
    create(todoCreateDto: TodoCreateDto): Promise<TodoDto>;
    update(id: string, todoDto: TodoDto): Promise<TodoDto>;
    destroy(id: string): Promise<TodoDto>;
}
