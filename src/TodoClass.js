export class TodoClass {
	constructor() {
		this.todos = [];
	}

	addTodo(title) {
		this.todos.push(title);
	}

	removeTodo(title) {
		this.todos = this.todos.filter(todo => todo !== title);
	}
}