// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// Imposto una variabile per il computer che genererà un numero random:
const dicePc = Math.floor(Math.random() * 6) + 1;

// Imposto una variabile per l'utente che genererà un numero random:
const diceUser = Math.floor(Math.random() * 6) + 1;

// Se il computer lancia un numero più grande dell'utente:
if(dicePc > diceUser) {
    
    // verrà visualizzato questo messaggio di alert:
    alert(`Il computer ha lanciato un ${dicePc}, mentre tu hai lanciato un ${diceUser}... Nooooooo! HAI PERSO! :(`)

// Altrimenti se il computer lancia un numero più basso dell'utente:   
} else if (dicePc < diceUser) {

    // verrà visualizzato questo messaggio di alert: 
    alert(`Il computer ha lanciato un ${dicePc}, mentre tu hai lanciato un ${diceUser}... Siiiiiii! HAI VINTO! :)`)

// Altrimenti se il computer lancia un numero pari a quello dell'utente: 
} else if (dicePc === diceUser) {
    
    // visualizzerà questo messaggio di alert:
    alert(`Il computer ha lanciato un ${dicePc}...e anche tu hai lanciato un ${diceUser}... Wooooooow! PAREGGIO! :)`) 
}