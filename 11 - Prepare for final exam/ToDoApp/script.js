
function createTaskElement(task) {
    const divElement = document.createElement('div');

    divElement.innerHTML = `
        <input type='checkbox'>
        <span>${task}</span>
        <button class='remove-button'>Remove</button>
    `;
    
    const removeButton = divElement.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
        divElement.remove();
    });

    const checkbox = divElement.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', (event) => {
        divElement.classList.toggle('task-completed', event.target.checked);
    });

    return divElement;
}

const formElement = document.querySelector('form');
const listElement = document.getElementById('task-list');

formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(formElement);
    const taskElement = createTaskElement(formData.get('task'));
    listElement.appendChild(taskElement);
    
    // Clear the input field after adding the task
    formElement.reset();
});