class AppController {
    constructor($scope) {
        this.todos = [];
        this.$scope = $scope;
    }

    addTodo() {
        if (this.$scope.newTodo === '') {
            //
        } else {
            const todo = {
                title: this.$scope.newTodo,
                completed: false
            };
            this.todos.push(todo);
            this.$scope.newTodo = '';
        }
    }

    removeTodo(index) {
        this.todos.splice(index,1);
    }

    getRemainingCount() {
        let remainingCount = this.todos.reduce((acc, todo) => {
            if (!todo.completed) {
                acc++;
            }
            return acc;
        }, 0);
        return remainingCount;
    }

    updateTodo(index, todo) {
        this.todos[index] = todo;
    }
}

AppController.$inject = ['$scope'];

export default AppController;