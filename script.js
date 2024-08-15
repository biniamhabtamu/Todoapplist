document.getElementById('addButton').addEventListener('click', function() {
    const input = document.getElementById('todoInput');
    const newItemText = input.value.trim();
    
    if (newItemText !== '') {
        const todoList = document.getElementById('todoList');
        const newItem = document.createElement('li');
        newItem.className = 'todo-item';
        newItem.innerHTML = `
            ${newItemText}
            <button class="delete-button">Delete</button>
        `;
        
        newItem.querySelector('.delete-button').addEventListener('click', function() {
            todoList.removeChild(newItem);
        });
        
        todoList.appendChild(newItem);
        input.value = '';
    }
});


