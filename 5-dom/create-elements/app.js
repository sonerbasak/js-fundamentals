
const cardBody = document.querySelectorAll('.card-body')[1];
const link = document.createElement('a');
link.id = "googleLink";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://www.google.com";
link.target = "_blank";
link.textContent = "Go to Google";

cardBody.appendChild(link);

const todo = document.createElement('li');
const todoLink = document.createElement('a');
const i = document.createElement('i');

const todoList = document.querySelector('.list-group');

todo.className = "list-group-item d-flex justify-content-between align-items-center";
todo.innerHTML = "Todo 1";
todoLink.href = "#";
todoLink.className = "delete-item";

i.className = "fa fa-remove";

todoLink.appendChild(i);
todo.appendChild(todoLink);

console.log(todoList);
todoList.appendChild(todo);