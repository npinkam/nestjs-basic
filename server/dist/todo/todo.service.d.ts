import { TodoCreateDto } from './dto/todo.create.dto';
import { TodoDto } from './dto/todo.dto';
import { TodoEntity } from './entity/todo.entity';
export declare class TodoService {
    todos: TodoEntity[];
    getAllTodo(): Promise<TodoDto[]>;
    getOneTodo(id: string): Promise<TodoDto>;
    createTodo(todoDto: TodoCreateDto): Promise<TodoDto>;
    updateTodo(id: string, todoDto: TodoDto): Promise<TodoDto>;
    destroyTodo(id: string): Promise<TodoDto>;
}
