"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTodoDto = void 0;
const toTodoDto = (data) => {
    const { id, name, description } = data;
    let todoDto = { id, name, description, };
    return todoDto;
};
exports.toTodoDto = toTodoDto;
//# sourceMappingURL=mapper.js.map