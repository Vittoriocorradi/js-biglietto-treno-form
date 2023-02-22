'use strics'

// VARIABILI

// Variabili input
let userName;
let userDistance;
let userAge;

// Bottoni
const confirmButton = document.getElementById('confirm-button');
const resetButton = document.getElementById('reset-button');

// Variabile prezzo
let ticketPrice;

// Variabili numeri casuali
let trainCarNumber;
let userCode;

// Variabile box che scompare
let trainTicket = document.getElementById('ticket');

// Variabili validazione input
let nameValidation;
let distanceValidation;

// Evento genera biglietto
confirmButton.addEventListener('click',
function() {


    // Assegnazione valore per validazione
    nameValidation = document.getElementById('user-name').value;
    distanceValidation = document.getElementById('user-distance').value;
    // Condizione validazione input
    if (nameValidation === '' || distanceValidation === '') {
        alert('Riempire i campi richiesti');
}   else {  
        // Riassegnazione variabili
        userName = document.getElementById('user-name').value;
        userDistance = Number(document.getElementById("user-distance").value);
        userAge = document.getElementById('user-age').value;
        ticketPrice = userDistance * 0.21;
        trainCarNumber = Math.floor(Math.random() * 10 + 1);
        userCode = Math.floor(Math.random() * 89998) + 10001;
        // Modifica DOM
        document.querySelector('.js-passenger-name').innerHTML = userName;
        document.getElementById('js-train-car').innerHTML = trainCarNumber;
        document.getElementById('js-user-code').innerHTML = userCode;
        document.getElementById('js-ticket-type').innerHTML = 'Biglietto standard';
        // Condizione
        if (userAge === 'minorenne') {
            ticketPrice = ticketPrice - (ticketPrice * 0.2);
            document.getElementById('js-ticket-type').innerHTML = 'Biglietto minorenni';
        }

        else if (userAge === 'over65') {
            ticketPrice = ticketPrice - (ticketPrice * 0.4);
            document.getElementById('js-ticket-type').innerHTML = 'Biglietto silver';
        }

        // Stampa risultati
        document.getElementById('js-ticket-price').innerHTML = ticketPrice.toFixed(2);
        document.getElementById('js-ticket-price').append('€');
        console.log('Il prezzo del biglietto è',ticketPrice,'€');
        // Mostra il biglietto
        trainTicket.classList.remove('hidden');
    }
    
}
);

// Evento annulla biglietto
resetButton.addEventListener('click',
function() {
    trainTicket.classList.add('hidden');
}
)
