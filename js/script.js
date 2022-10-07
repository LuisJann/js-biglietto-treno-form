/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2 (BONUS):
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui 
l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). */

// INPUT
const tripDistanceInput =  document.getElementById("distance");
const userAgeInput = document.getElementById("age");
console.log(tripDistanceInput, userAgeInput);


const submitBtn = document.getElementById("submit");
console.log(submitBtn);

// ELABORAZIONE
submitBtn.addEventListener("click", function() {
    const tripDistance = parseInt(tripDistanceInput.value);
    console.log(tripDistance);

    const userAge = parseInt(userAgeInput.value);
    console.log(userAge);

    const ticketPrice = tripDistance * (0.21);
    console.log(ticketPrice);

    if (userAge >= 65) {
        let price = (ticketPrice * 0.6).toFixed(2);
        console.log(price);
        document.getElementById("title").innerHTML = `
        <h1> Ecco il tuo biglietto</h1>
        <h2> Il prezzo base del tuo biglietto è: ${ticketPrice.toFixed(2)}€</h2>
        <h2> Grazie allo sconto over 65 pagerai solo: ${price}€</h2>`;
    }
    else if (userAge < 18) {
        let price = (ticketPrice * 0.8).toFixed(2);
        console.log(price);
        document.getElementById("title").innerHTML = `
        <h1> Ecco il tuo biglietto</h1>
        <h2> Il prezzo base del tuo biglietto è: ${ticketPrice.toFixed(2)}€</h2>
        <h2> Grazie allo sconto per i minorenni pagerai solo: ${price}€</h2>`;
    }
    else {
        let price = (ticketPrice).toFixed(2);
        console.log(price);
        document.getElementById("title").innerHTML = `
        <h1> Ecco il tuo biglietto</h1>
        <h2> Il prezzo del tuo biglietto è: ${price}€</h2>`;
    }


    // PULIZIA INPUT
    tripDistanceInput.value = "";
    userAgeInput.value = "";
})