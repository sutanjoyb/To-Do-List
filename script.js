// Selecting DOM Elements
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Try to load saved todos from LocalStorage (if any)
const saved = localStorage.getItem('todos');
const todos = saved? JSON.parse(saved) : [];

// Save current todos array to LocalStorage
function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Create a DOM node for a todo object and append it to the list
function createTodoNode(todo, index){
    const li = document.createElement('li');

    // Checkbox to toggle completion
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.checked = !!todo.completed;
    checkBox.addEventListener("change" => {
        todo.completed = chekbox.checked;
    })
}

// Render the whole todo list from todos array
function render(){
    list.innerHTML= '';

    // Recreate each item
    todos.forEach((todo, index) => {
        const node = createTodoNode(todo, index);
        list.appendChild(node);        
    });
}