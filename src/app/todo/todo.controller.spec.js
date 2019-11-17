import TodoController from './todo.controller'; 

describe('todoController', () => {
    it('must be created', () => {
        let todoController = new TodoController();
        expect(todoController._editMode).toBeFalsy();
    })
    it('edit', () => {
        let todoController = new TodoController(); 
        todoController.todo = 'actual';
        todoController.edit();
        expect(todoController._editMode).toBeTruthy();
        expect(todoController._oldValue).toBe('actual');
        expect(todoController.isEditMode()).toBeTruthy();
    })
    it('doneEditing', () => {
        let todoController = new TodoController(); 
        todoController.update = (value) => {};
        spyOn(todoController, 'update');
        todoController.todo = 'actual';
        todoController.doneEditing();
        expect(todoController.update).toHaveBeenCalled();
        expect(todoController.update).toHaveBeenCalledWith({todo: 'actual'});
    })
})