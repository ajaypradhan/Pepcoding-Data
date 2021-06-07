let addToDoButton = document.querySelector(".add-todo");
let todoInput = document.querySelector(".todo-input");
let todosList = document.querySelector(".todo-input-container")


//attach click event on addTodoButton
//all input element has value where tye store data
addToDoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", addTodo);

function addTodo(e) {
  let todoInputValue = todoInput.value;

  if ((e.type == "keypress" && e.key == "Enter") || e.type == "click") {
    // console.log(todoInputValue);
    appendTodo(todoInputValue);
    todoInput.value = "";
  }
}

function appendTodo(todo) {
  // <div class = "todo-item">
  let todoItemDiv = document.createElement("div");
  todoItemDiv.classList.add("todo-item");

  // <p class = "todo-input">todo</p>
  let pTag = document.createElement("p");
  pTag.classList.add("todo-input");
  pTag.textContent = todo;

  //<button class = "delete-todo">Delete</button>
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-todo");
  deleteButton.textContent = "Delete";

  //append all data
  todoItemDiv.append(pTag);
  todoItemDiv.append(deleteButton);

  // adding item at last of list
  todosList.append(todoItemDiv);
}


