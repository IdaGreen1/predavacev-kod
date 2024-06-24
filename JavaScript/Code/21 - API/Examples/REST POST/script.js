const apiURL = 'https://api.edu.skuflic.com/users';

const requestData ={
    name: 'Ida Green',
    birthday: '24/06/1991',
    address: {
        street: 'Gradišćanska 24',
        city:'Zagreb',
        zip:'10000',
        country: 'Hrvatska',
    },
    email:'idagreen@gmail.com',
    phone:'123-456-789',
};

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
    },
    body:JSON.stringify(requestData),
};

document.querySelector('button').addEventListener('click', () => {
    fetch(apiURL, requestOptions)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => console.log('Response data: ', data))
    .catch((error) => {
        console.log(error);
    });
});