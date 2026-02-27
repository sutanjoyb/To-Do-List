// Selecting DOM Elements
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// Try to load saved todos from LocalStorage (if any)
const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

// Save current todos array to LocalStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Create a DOM node for a todo object and append it to the list
function createTodoNode(todo, index) {
  const li = document.createElement("li");

  // Checkbox to toggle completion
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = !!todo.completed;
  checkBox.addEventListener("change", () => {
    todo.completed = checkBox.checked;

    // TODO: Visual feedback: strike through when completed
    textSpan.style.textDecoration = todo.completed ? "line-through" : "";
    saveTodos();
  });

  // Text of the TODO
  const textSpan = document.createElement("span");
  textSpan.textContent = todo.text;
  textSpan.style.margin = "0 8px";
  if (todo.completed) {
    textSpan.style.textDecoration = "line-through";
  }

  // Add double-click eventListener
  textSpan.addEventListener("dblclick", () => {
    const newText = prompt("Edit Todo", todo.text);
    if (newText !== null) {
      todo.text = newText.trim();
      textSpan.textContent = todo.text;
      saveTodos();
    }
  });

  // Delete Todo Button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    todos.splice(index, 1);
    render();
    saveTodos();
  });

  li.appendChild(checkBox);
  li.appendChild(textSpan);
  li.appendChild(delBtn);
  return li;
}

// Render the whole todo list from todos array
function render() {
  list.innerHTML = "";

  // Recreate each item
  todos.forEach((todo, index) => {
    const node = createTodoNode(todo, index);
    list.appendChild(node);
  });
}

function addTask() {
  const text = input.value.trim();
  if (!text) {
    return;
  }

  // Push a new todo object
  todos.push({ text, completed: false });
  input.value = "";
  render();
  saveTodos();
}

addBtn.addEventListener("click", addTask);
render();
