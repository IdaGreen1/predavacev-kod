const url = 'http://api.edu.skuflic.com/users';
fetch(url)
    .then(response => response.json())
    .then(data => showData(data))

function showData(data) {
    const template = document.getElementById('template').innerHTML;

    const compiledTemplate = Handelbars.compile('template');

    const rendered = compiledTemplate({ user: data });

    document.getElementById('users').innerHTML = rendered;
};
        
    

  
