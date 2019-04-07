function addItem() {
    // get the todo-item-text value
    let newItemText = document.getElementById('todo-item-text').value;

    // check if the newItemText is empty
    if (newItemText === '') {
        alert('You cannot add an empty todo item you silly goose!');
        return;
    }

    let todoList = document.getElementById('todo-list');

    let newListItem = document.createElement('li');
    newListItem.classList.add('todo-item');

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('button-delete');
    deleteButton.innerHTML = 'X';
    deleteButton.setAttribute('onclick', 'deleteItem(this)');

    newListItem.appendChild(deleteButton);

    let itemPElement = document.createElement('span');
    itemPElement.innerHTML = newItemText;
    newListItem.appendChild(itemPElement);

    let dateElement = document.createElement('span');
    dateElement.classList.add('item-date');
    dateElement.innerHTML = (new Date()).toDateString();
    newListItem.appendChild(dateElement);

    todoList.appendChild(newListItem);
}

function deleteItem(item) {
    console.log(item.parentElement);

    item.parentElement.remove();
}