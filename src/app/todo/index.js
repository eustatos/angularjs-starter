import TodoTemplate from './todo.template.html';
import TodoController from './todo.controller';

const TodoComponent = {
    bindings: {
        todo: '<',
        remove: '&',
        update: '&'
    },
    template: TodoTemplate,
    controller: TodoController
}

export default TodoComponent;