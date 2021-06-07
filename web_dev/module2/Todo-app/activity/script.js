let addToDoButton = document.querySelector(".add-todo");
let todoInput = document.querySelector(".todo-input");

//attach click event on addTodoButton
//all input element has value where tye store data
addToDoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress" , addTodo);

function addTodo(e) {
    let todoInputValue = todoInput.value;
    
    
    if((e.type == "keypress" && e.key == "Enter") || (e.type == "click")){
        console.log(todoInputValue);
        todoInput.value = "";
    }
}
