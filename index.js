let shoppingList = [];
const itemInput = document.getElementById('itemInput');
const addItem = document.getElementById('addItem');
const shoppingListContainer = document.getElementById('shoppingList');
const markPurchased = document.getElementById('markPurchased');
const clearList = document.getElementById('clearList');
addItem.addEventListener('click', () => {
  const newItem = itemInput.value;
  if (newItem !== '') {
    shoppingList.push(newItem);
    itemInput.value = '';
    const listItem = document.createElement('li');
    listItem.textContent = newItem;
    shoppingListContainer.appendChild(listItem);
  }
});

shoppingListContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const listItem = event.target;
    if (listItem.classList.contains('purchased')) {
      listItem.classList.remove('purchased');
    } else {
      listItem.classList.add('purchased');
    }
  }
});
markPurchased.addEventListener('click', () => {
  const listItems = shoppingListContainer.querySelectorAll('li');
  listItems.forEach(item => {
    if (!item.classList.contains('purchased')) {
      item.classList.add('purchased');
    }
  });
});
clearList.addEventListener('click', () => {
  shoppingList = [];
  shoppingListContainer.innerHTML = '';
});
