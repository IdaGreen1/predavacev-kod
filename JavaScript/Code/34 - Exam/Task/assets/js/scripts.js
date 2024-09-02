const url = 'https://api.edu.skuflic.com/billing'

fetch(url)
    .then(response => response.json())
    .then(data => showData(data))


function showData(data) {
    removeClock = document.getElementById('loading');
    removeClock.remove;
    let dataTable = `
    <tr>
    <th>Cardholder Name</th>
    <th>Cardholder Adress</th>
    <th>Card Number</th>
    <th>Expiration</th>
    <th>CVV</th>
    <th>Card</th>
    <th>Status</th>
    </tr>`;

    for (let i of data) {
        dataTable = dataTable + `
       <tr>
       <td>${i.cardholder_name}</td>
       <td>${i.card_number}</td>
       <td>${i.cvv }</td>
       <td>${i.expiration_month}/${i.expiration_year}</td>
       <td>${i.billing_address}</td>
       <td>${i.card_type}</td>
       <td>${i.card_status}</td>
       </tr>`
     }
        document.getElementById('data').innerHTML = dataTable;

     
}





