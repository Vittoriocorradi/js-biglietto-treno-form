Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).


Eserccizio


Creo una variabile userName a cui verrà assegnato un valore tramite input dal cliente

Creo una variabile userDistance a cui verrà assegnato un valore tramite input dal cliente

Creo una variabile userAge a cui verrà assegnato un valore tramite input select dal cliente (Possibilità: Minorenne, Maggiorenne, Over 65)

Creo una variabile ticketPrice il cui valore sarà calcolato moltiplicando userDistance con la costante 0.21 (€/km)

Creo una variabile trainCarNumber a cui verrà assegnato come valore un numero casuale intero da uno a dieci per rappresentare il numero del vagone

Creo una variabile userCode a cui verrà assegnato come valore un numero casuale intero da 10000 a 99999 per rappresentare il codice CP

Creo una variabile confirmButton prendendo il bottone "Genera" per effettuare un evento click

Creo una variabile resetButton prendendo il bottone "Annulla" per effettuare un evento click

Scrivo un Evento click con confirmButton che:
    assegnerà a ticketPrice il calcolo userDistance per la costante 0.21
    vedrà con una condizione su userAge se andare ad applicare sconti a ticketPrice
    SE userAge è Minorenne, si applicherà alla variabile ticketPrice uno sconto del 20%
        ALTRIMENTI SE userAge è Over 65, si applicherà alla variabile ticketPrice uno sconto del 40%
    assegnerà a trainCarNumber un numero casuale tra 1 e 10
    assegnerà a userCode un numero casuale tra 10000 e 99999
    sovrascriverà degli elementi html
    toglierà una classe hidden al contenitore del biglietto
    riporterà in console il prezzo finale

Scrivo un Evento click con resetButton che aggiungerà una classe hidden al contenitore del biglietto facendolo così scomparire




