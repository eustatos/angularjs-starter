import TodoController from './todo.controller'; 

describe('todoController', () => {
    it('first', () => {
        const todoController = new TodoController();
        expect(todoController._editMode).toBeFalsy();
    })
})