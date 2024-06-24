document.querySelector('button').addEventListener('click', () => {
    const userID = prompt('Wich user do you want to delete?');
    const apiUrl = `https://api.edu.skuflic.com/users/${userID}`;

    const requestOptions = {
        method:'DELETE',
        headers: {
            //Include any required headers such as utentification tokens, etc.
        },
    };

    fetch(apiUrl, requestOptions)
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not Ok. Aborting.');
        }
        alert(`User with ID ${userID} was deleted succesfully.`);
    })
    .catch((error) => {
        console.error('Error', error);
    });
});