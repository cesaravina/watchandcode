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
// var myComputer = {
// 	operatingSystem: "mac",
// 	screenSize: "15 inches",
// 	purchaseYear: 2015
// }

// var cesar = {
// 	name: 'Cesar',
// 	sayName: function() {
// 		console.log(this.name);
// 	}
// }

// var todoList = {
// 	todos: ['item 1', 'item 2', 'item 3'],
// 	displayTodos: function() {
// 		console.log('My Todos: ', this.todos)
// 	},
// 	addTodo: function(todo) {
// 		this.todos.push(todo);
// 		this.displayTodos();
// 	},
// 	changeTodo: function(position, newValue){
// 		this.todos[position] = newValue,
// 		this.displayTodos();
// 	},
// 	deleteTodo: function(position){
// 		this.todos.splice(position, 1),
// 		this.displayTodos();
// 	}
// };

// version 4

// var todoList = {
// 	todos: [],
// 	displayTodos: function() {
// 		console.log('My Todos: ', this.todos)
// 	},
// 	addTodo: function(todoText) {
// 		this.todos.push({
// 			todoText: todoText,
// 			completed: false
// 		});
// 		this.displayTodos();
// 	},
// 	changeTodo: function(position, todoText){
// 		this.todos[position].todoText = todoText,
// 		this.displayTodos();
// 	},
// 	deleteTodo: function(position){
// 		this.todos.splice(position, 1),
// 		this.displayTodos();
// 	},
// 	toggleCompleted: function(position){
// 		var todo = this.todos[position];
// 		todo.completed = !todo.completed;
// 		this.displayTodos();
// 	}
// };

// // version 5

// var testArray = [2, 4, 6]
// for (var i = 0; i < testArray.length; i++){
// 	console.log(testArray[i])
// }

// var todoList = {
// 	todos: [],
// 	displayTodos: function() {
// 		if (this.todos.length === 0){
// 			console.log('Your todo list is empty!!!')
// 		} else {
// 			console.log('My Todos: ');
// 			for (var i = 0; i < this.todos.length; i++){
// 				if (this.todos[i].completed === true){
// 					console.log('(x)', this.todos[i].todoText);
// 				} else {
// 					console.log('( )', this.todos[i].todoText);
// 				}
// 			}
// 		}
// 	},
// 	addTodo: function(todoText) {
// 		this.todos.push({
// 			todoText: todoText,
// 			completed: false
// 		});
// 		this.displayTodos();
// 	},
// 	changeTodo: function(position, todoText){
// 		this.todos[position].todoText = todoText,
// 		this.displayTodos();
// 	},
// 	deleteTodo: function(position){
// 		this.todos.splice(position, 1),
// 		this.displayTodos();
// 	},
// 	toggleCompleted: function(position){
// 		var todo = this.todos[position];
// 		todo.completed = !todo.completed;
// 		this.displayTodos();
// 	}
// };


// version 6

// var todoList = {
// 	todos: [],
// 	displayTodos: function() {
// 		debugger;
// 		if (this.todos.length === 0){
// 			console.log('Your todo list is empty!!!')
// 		} else {
// 			console.log('My Todos: ');
// 			for (var i = 0; i < this.todos.length; i++){
// 				if (this.todos[i].completed === true){
// 					console.log('(x)', this.todos[i].todoText);
// 				} else {
// 					console.log('( )', this.todos[i].todoText);
// 				}
// 			}
// 		}
// 	},
// 	addTodo: function(todoText) {
// 		this.todos.push({
// 			todoText: todoText,
// 			completed: false
// 		});
// 		this.displayTodos();
// 	},
// 	changeTodo: function(position, todoText){
// 		this.todos[position].todoText = todoText,
// 		this.displayTodos();
// 	},
// 	deleteTodo: function(position){
// 		this.todos.splice(position, 1),
// 		this.displayTodos();
// 	},
// 	toggleCompleted: function(position){
// 		var todo = this.todos[position];
// 		todo.completed = !todo.completed;
// 		this.displayTodos();
// 	},
// 	toggleAll: function() {
// 		var totalTodos = this.todos.length
// 		var completedTodos = 0;
// 		// get number of completed todos.
// 		for(var i = 0; i< totalTodos; i++){
// 			if(this.todos[i].completed === true){
// 				completedTodos++;
// 			}
// 		}
// 		// if everything's true, make everything false.
// 		if (completedTodos === totalTodos) {
// 			for (var i = 0; i < totalTodos; i++) {
// 				this.todos[i].completed = false;
// 			}
// 			// Case 2, otherwise, make everything true
// 		}else {
// 			for (var i = 0; i < totalTodos; i++){
// 				this.todos[i].completed = true;
// 			}
// 		}
// 		this.displayTodos();
// 	}
// };

// // version 7
// // Requirements:
// // *There should be 'Display todos' & 'toggle all' buttons
// // *Clicking "Display todos" should run todoList.displayTodos()
// // *Clicking "Toggle all" should run todoList.toggleAll()

// var displayTodosButton = document.getElementById("displayTodosButton");
// var toggleAllButton = document.getElementById("toggleAllButton");

// displayTodosButton.addEventListener('click', function(){
// 	todoList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function(){
// 	todoList.toggleAll();
// })

// version 8

var todoList = {
	todos: [],
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
	},
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
	},
	deleteTodo: function(position){
		this.todos.splice(position, 1)
	},
	toggleCompleted: function(position){
		var todo = this.todos[position];
		todo.completed = !todo.completed;
	},
	toggleAll: function() {
		var totalTodos = this.todos.length
		var completedTodos = 0;
		// get number of completed todos.
		for(var i = 0; i< totalTodos; i++){
			if(this.todos[i].completed === true){
				completedTodos++;
			}
		}
		// if everything's true, make everything false.
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
			// Case 2, otherwise, make everything true
		}else {
			for (var i = 0; i < totalTodos; i++){
				this.todos[i].completed = true;
			}
		}
	}
};

// Old buttons and handlers before refactoring.
// // var displayTodosButton = document.getElementById("displayTodosButton");
// // var toggleAllButton = document.getElementById("toggleAllButton");

// displayTodosButton.addEventListener('click', function(){
// 	todoList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function(){
// 	todoList.toggleAll();
// });

var handlers = {
	addTodo: function() {
		var addTodoTextInput = document.getElementById('addTodoTextInput');
		todoList.addTodo(addTodoTextInput.value);
		addTodoTextInput.value = "";
		view.displayTodos();
	},
	changeTodo: function() {
		var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
		var changeTodoTextInput = document.getElementById('changeTodoTextInput');
		todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
		changeTodoPositionInput.value = '';
		changeTodoTextInput.value = '';
		view.displayTodos();		
	},
	deleteTodo: function(position) {
		todoList.deleteTodo(position);
		view.displayTodos();		
	},
	toggleCompleted: function() {
		var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
		todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
		toggleCompletedPositionInput.value = '';
		view.displayTodos();		
	},
	toggleAll: function(){
		todoList.toggleAll();
		view.displayTodos();		
	}
};


// version 9
// **Requirements
// There should be an li element for every todo
// Each li element should contain .todoText
// Each li element should show .completed


// var todoLi = document.createElement('li');
// var todosUl = document.querySelector('ul');
// todosUl
// todosUl.appendChild(todoLi);


// Version 10

var view = {
	displayTodos: function() {
		var todosUl = document.querySelector('ul');
		todosUl.innerHTML = ''
		for (var i = 0; i < todoList.todos.length; i++){
			var todoLi = document.createElement('li');
			var todo = todoList.todos[i];
			var todoTextWithCompletion = '';

			if(todo.completed === true){
				todoTextWithCompletion = "(x) " + todo.todoText;
			}else{
				todoTextWithCompletion = "( ) " + todo.todoText;
			}

			todoLi.id = i;
			todoLi.textContent = todoTextWithCompletion;
			todoLi.appendChild(this.createDeleteButton());
			todosUl.appendChild(todoLi);
		}
	},
	createDeleteButton: function(){
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function(){
		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(event){
			// console.log(event.target.parentNode.id);
			// get the element that was clicked on
			var elementClicked = event.target;

			// check if element clicked is a delete button
			if (elementClicked.className === 'deleteButton'){
				handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
			}
		});	
	}
};

view.setUpEventListeners();


















































