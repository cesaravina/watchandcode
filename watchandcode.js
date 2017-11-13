// // version 1
// // var todos = ['item 1', 'item 2', 'item 3']
// // todos.push('item 4')
// // console.log(todos[2])
// // todos[0] = 'item 1 updated'
// // todos.splice(0, 1)

// // version 2
// var todos = ['item 1', 'item 2', 'item 3']
// function displayTodos() {
// 	return ('My todos:', todos);
// }
// // displayTodos()

// function addTodo(todo) {
// 	todos.push(todo);
// 	displayTodos();
// }
// addTodo('hi')

// function changeTodo(position, newValue){
// 	todos[position] = newValue;
// 	displayTodos();
// }

// function deleteTodo(position) {
// 	todos.splice(position, 1);
// 	displayTodos();
// }

// version 3
var myComputer = {
	operatingSystem: "mac",
	screenSize: "15 inches",
	purchaseYear: 2015
}

var cesar = {
	name: 'Cesar',
	sayName: function() {
		console.log(this.name);
	}
}

var todoList = {
	todos: ['item 1', 'item 2', 'item 3'],
	displayTodos: function() {
		console.log('My Todos: ', this.todos)
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	},
	changeTodo: function(position, newValue){
		this.todos[position] = newValue,
		this.displayTodos();
	},
	deleteTodo: function(position){
		this.todos.splice(position, 1),
		this.displayTodos();
	}
};



