class TodoController {
    constructor() {
        this._editMode = false;
    }

    edit() {
        console.log('dbclick');
        this._editMode = true;
        this._oldValue = this.todo;
    }

    isEditMode() {
        return this._editMode;
    }

    doneEditing() {
        this._editMode = false;
        this.update({todo: this.todo})
    }
}

export default TodoController;