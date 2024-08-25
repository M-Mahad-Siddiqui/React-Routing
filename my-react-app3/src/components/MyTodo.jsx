import React from "react";

export default function MyTodo() {
	const [todo, setTodo] = React.useState(["Eat Food", "Workout", "Sleep"]);

	const addTodo = (value) => {
		setTodo([...todo, value]);
	};

	const deleteTodo = () => {
		setTodo([]);
	};

	const handleAddTodo = () => {
		const todoInput = document.getElementById("todoInput");
		if (todoInput.value === "") return;
		addTodo(todoInput.value);
		todoInput.value = ""; // Clear the input field
	};

	const removeTodo = (index) => {
		// const newTodos = [...todo];
		// newTodos.splice(index, 1);
		// setTodo(newTodos);
		setTodo(todo.filter((_, i) => i !== index));
	};

	const editTodo = (index) => {
		const newTodos = [...todo];
		newTodos[index] = prompt("Enter new todo");
		setTodo(newTodos);
	};

	return (
		<div className="todo-container">
			<style>{`
				.todo-container {
					font-family     : verdana;
					max-width       : 500px;
					margin          : 0 auto;
					padding         : 20px;
					border          : 1px solid #ddd;
					border-radius   : 20px;
					box-shadow      : 0 0px 9px rgba(117, 2, 108, 0.9);
					background-color: #f9f9f9;
				}
				h2 {
					color: #333;
				}
				input {
     padding      : 8px;
     margin-right : 8px;
     border       : 1px solid #ccc;
     border-radius: 20px;
     width        : 230px;
     font-size    : 18px;
				}
				button {
					font-size       : 14px;
					padding         : 8px 12px;
					border          : none;
					border-radius   : 5px;
					color           : #fff;
					background-color: #007bff;
					cursor          : pointer;
					margin-right    : 8px;
					transition      : background-color 0.3s ease;
				}
				button:hover {
					background-color: #0056b3;
				}
				ul {
     list-style: none;
     padding   : 0;

				}
				li {
     padding         : 8px;
     margin-bottom   : 8px;
     background-color: #fff;
     border-radius   : 4px;
     display         : flex;
     justify-content : space-between;
     align-items     : center;
     box-shadow      : 0px 0px 9px rgba(180, 10, 120, 0.5);
				}
				li button {
					padding         : 4px 8px;
					font-size       : 12px;
					background-color: #5538B9;
					margin          : 0 2px;
				}
				li button:hover {
					background-color: #c82333;
				}
			`}</style>
			<h2>My Todo List</h2>
			<input type="text" id="todoInput" placeholder="Add Todo" />
			<button onClick={handleAddTodo}>Add Todo</button>
			<button onClick={deleteTodo}>Delete All Todos</button>
			<ul>
				{todo.map((todo, index) => (
					<li key={index}>
						{todo}
						<div>
							<button onClick={() => editTodo(index)}>Edit</button>
							<button onClick={() => removeTodo(index)}>Remove</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
