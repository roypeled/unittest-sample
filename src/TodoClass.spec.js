import {TodoClass} from "./TodoClass";


describe('Todo Class Test', () => {
	let todo;

	beforeEach(() => {
		 todo = new TodoClass();
	});

	it('should add todo item', () => {
		todo.addTodo('hello world');
		expect(todo.todos[0]).toBe('hello world');
	});

	describe('removal tests', () => {

		it('should remove todo item', () => {
			todo.addTodo('hello world 2');
			todo.removeTodo('hello world 2');
			expect(todo.todos.length).toBe(0);
		});

		it('should create new array when removing item', () => {
			let originalTodos = todo.todos;
			todo.addTodo('hello world 2');
			todo.removeTodo('hello world 2');
			expect(todo.todos).not.toBe(originalTodos);
		});

		it('should do nothing if there is no item to remove', () => {
			todo.addTodo('hello world 2');
			todo.removeTodo('hello world 3');
			expect(todo.todos.length).toBe(1);
			expect(todo.todos[0]).toBe('hello world 2');
		});
	});
});