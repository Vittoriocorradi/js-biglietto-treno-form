'use strics'

let userDistance;
let userAge;
const confirmButton = document.getElementById('confirm-button');
let ticketPrice;

confirmButton.addEventListener('click',
function() {
    userDistance = Number(document.getElementById("user-distance").value);
    userAge = document.getElementById('user-age').value;
    ticketPrice = userDistance * 0.21;
    if (userAge === 'minorenne') {
        ticketPrice = ticketPrice - (ticketPrice * 0.2);
    }

    else if (userAge === 'over65') {
        ticketPrice = ticketPrice - (ticketPrice * 0.4);
    }

    document.getElementById('price').append(ticketPrice,'€');
    console.log('Il prezzo del biglietto è',ticketPrice,'€');
}
);