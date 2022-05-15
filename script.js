class TodoList {
    constructor(el) {
        this.todos = [];
        this.el = el;
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter((el) => {
            return el.id !== id;
        });
    }

    getTodos() {
        return this.todos;
    }

    changeStatus(id) {
        let index = this.todos.findIndex((el) => el.id === id);
        this.todos[index].status = !this.todos[index].status;
    }

    render() {
        let lis = '';
        for (let el of this.todos) {
            if (!el) {
                return;
            }
            lis += `<li data-id="${el.id}">${el.value}<button class="set-status">Change status</button><button class="delete-task">Delete</button></li>`;
        }
        this.el.innerHTML = lis;
    }
}

class Task {
    constructor(value, status) {
        this.value = value;
        this.status = status;
        this.id = Math.random().toString(36).substr(2, 9);
    }
}

let list = document.getElementById('list');
let todo1 = new TodoList(list);

todo1.addTodo(new Task('9345', true));
todo1.addTodo(new Task('2945hv', false));
console.log(todo1.getTodos());
todo1.render();
