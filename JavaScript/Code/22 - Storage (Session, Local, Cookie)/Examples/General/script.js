//General
(function storage() {

    localStorage.setItem('user', 'Ida Green') //key-value pair
    const user = localStorage.getItem('user')

    document.getElementById('user').innerHTML = user;

    sessionStorage.setItem('session', crypto.randomUUID());

    localStorage.setItem('age', 33);

    //localStorage.clear(); brisanje
})();

(function cookies() {
    document.cookie = 'username=Ida Green;expires=Thu, 31 Dec 2024 12:00:00 UTC;path=/;Secure;';
    console.log('Cookie is' + document.cookie);
})();