let todoList = document.getElementById('todo-list');

function addItem() {
    // get the todo-item-text value
    let newItemText = document.getElementById('todo-item-text').value;

    // check if the newItemText is empty and not a string just with spaces
    if (newItemText === '' && !(/^\s+$/.test(newItemText))) {
        alert('You cannot add an empty todo item you silly goose!');
    } else {
       //inserting a single string contains all the elements to the todoList
        todoList.innerHTML += `
            <li class="todo-item"><button onclick="deleteItem(this)" class="button-delete">X</button> ${newItemText} <span class="item-date">${new Date().toDateString()}</span></li>
        `;
    
    }

    
}

function deleteItem(item) {
    console.log(item.parentElement);

    item.parentElement.remove();
}