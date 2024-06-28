// Api Endpoint
const api_url = 'https://api.edu.skuflic.com/tasks';

//Global variables
const date = new Date();
const audio = new Audio('assets/audio/ping.mp3');
const options = { month: 'long', day: 'numeric', year: 'numeric' };

const progressEl = document.querySelector('.percentage');

anime({
    targets: '.loading',
    direction: 'alternate',
    loop: false,
    duration: 1000,
    update: function (anim) {
        progressEl.innerHTML = Math.round(anim.progress) + '%';
    },
});

setTimeout(() => {
    document.getElementsByClassName('loading')[0].style.display = 'none';
}, 1000);

//Modal Functionality
const modal = document.getElementById('modal');
const button = document.getElementById('button');
const span = document.querySelector('.close-modal');

function showModal() {
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}

button.addEventListener('click', showModal);
span.addEventListener('click', hideModal);

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        console.log(event.target);
        hideModal();
    }
});

// copyright year - Footer
document.getElementById('year').innerText = date.getFullYear();

//Greeting function
(function () {
    const icon = document.getElementById('icon');
    const hours = date.getHours();
    let text;
    if (hours < 12) {
        icon.innerHTML = 'routine';
        text = 'Good Morning'
    } else if (hours < 18) {
        icon.innerHTML = 'clear_day';
        text = 'Good Afternoon'

    } else {
        icon.innerHTML = 'dark_mode';
        text = 'Good Evening'

    }
    document.getElementById('greeting').innerHTML = text;
})();

function setUser () {
    let user = document.getElementById('name').value;
    localStorage.setItem('user', user);
    document.getElementById('user').innerHTML = user;
    hideModal();
    user = '';
}

(function () {
    const user = localStorage.getItem('user');
    document.getElementById('user').innerText = !user ? 'Hey there stranger'
    : user;
})();

if(localStorage.getItem('dark-mode') == 'enabled') {
    enableDarkMode();
}

function enableDarkMode() {
    const darkMode = document.getElementById('dark-mode');
    document.body.classList.toggle('dark');

    document.getElementById('loading').style.backgroundColor = '#121212';
    document.querySelector('percentage').style.color = '#FFF';

    darkMode.innerHTML == 'Enable Dark Mode'
    ? (darkMode.innerHTML = 'Disable Dark Mode')
    : (darkMode.innerHTML = 'Enable Dark Mode');
}

//Toggle dark mode on button click and update lcal storage
document.getElementById('dark-mode').addEventListener('click', function() {
    enableDarkMode();
    localStorage.getItem('dark-mode') == 'enabled'
    ? localStorage.setItem('dark-mode', 'disabled')
    : localStorage.setItem('dark-mode', 'enabled');
});

//Hide the top bar if close icon is clicked and save decision in local storage
const topBar = document.getElementById('top-bar-hide');
topBar.addEventListener('click', function () {
    document.querySelector('.top-bar').style.display = 'none';
    localStorage.setItem('cookie-notice', 'closed');
});

if(localStorage.getItem('cookie-notice') == 'closed') {
    document.querySelector('.top-bar').style.display = 'none';
}

//Api- Fetch data when page loads
fetch(api_url)
.then((response) => response.json())
.then((data) => {
        const list = document.getElementById('list');
        data.forEach((task) => {
            createTaskListItem(task);
        });
       
        
    });

//New task
function newTask() {
    const input = document.getElementById('inputField').value;
    const due = document.getElementById('due-date').value;
    const category = document.getElementById('category').value;
    const formattedDate = date.toLocaleDateString('en-US', options);
   
    let newId = 1;
    const list = document.getElementById('list');
    // let newId = list.children.length + 1;

    const lastChild = list.lastChild;
    
    if (lastChild.dataset.id) {
        newId = parseInt(lastChild?.dataset?.id) + 1;
    }

    if(!input) {
        showError();
        return;
        }

    const task = {
        task: input,
        completed: true,
        date: formattedDate,
        category: category,
        id: newId,
        due: due,
    };

    //Objekt 'task' šaljemo funkciji koj aće kreirati karticu sa zadatkom
    // createTaskListItem(task);
    fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    }).then((response) => {
        if (!response.ok) {
            throw new Error(
                `Request failed with ${response.status}: ${response.statusText}`
            );
        } else {
            createTaskListItem(task);
            document.getElementById('inputField').value = null;
        }
    });
    // Also here you can catch error
}

function handleResourceDeletion(element) {
    fetch(api_url, {
        method:'DELETE',
        headers: {
            'Content-Type' : 'application/json',
        },
    }).then((response) => {
        if(!response.ok) {
            throw new Error(
                `Request failed with ${response.status}: ${response.statusText}`
            );
        } else {
            element.remove();
            checkEmpty();
        }
    });
}

document.getElementById('list').addEventListener('click', (event) => {
    if(event.target.classList.contains('close')) {
        console.log(event.target.parentElement.dataset.id);
    }
});

function createTaskListItem(task) {
    console.log(task);

    const li = document.createElement('li');

    li.innerHTML = `
        <span class='task' data-id='${task.id}>${task.task}</span>
        <span class='date'>Added ${task.date} ${task.due && `-Due ${new Date (task.due).toLocaleDateString('en-US', options)}`}</span>

        <span class='category ${task.category
        .toLowerCase()
        .split(' ')
        .join('-')}'
        data-id='${task.id}'
        >${task.category}
        </span>

        <span class='close material-symbols-outlined'>delete</span>
    
    `;

    li.dataset.id = task.id;
    li.dataset.due = task.due;
    li.dataset.completed = task.completed;

    document.getElementById('list').appendChild(li);
    checkEmpty();
}

function checkEmpty() {
    if(document.getElementById('list').childNodes.lenght > 0 == true) {
        document.getElementById('empty').style.display = 'none';
    } else {
        document.getElementById('empty').style.display = 'initial';
    }
}

function showError() {
    const error = document.getElementById('inputField');
    error.placeholder = 'Task cannot be empty.';

    setTimeout(() => {
        error.placeholder = 'Add a task...';
    }, 2000);
}




