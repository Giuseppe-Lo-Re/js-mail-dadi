// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// // stampa un messaggio appropriato sull’esito del controllo.


// Creo una lista mail autorizzate all'accesso:
const mailList = [ 'giuseppe.verdi@gmail.com', 'mario.rossi@gmail.com', 'claudia.verdi@gmail.com', 'giuseppelore0@gmail.com', 'alessandro.scolozzi@gmail.com', 'paolo.duzioni@gmail.com', 'massimo.piazza@gmail.com'];

// Creo un prompt comandi attraverso cui chiederò la mail e l'inserisco in una costante:
const userMail = prompt('Ciao! Inserisci la tua mail per accedere ai servizi');

// Imposto una variabile che dovrò sovrascrivere e 
// dichiaro di default che la mail non è presente nel database: 
let mailFound = false;

// controllo che la mail fornita dall'utente sia nella lista di accesso attraverso l'array col ciclo for:
for(let i = 0; i < mailList.length; i++) {

// Imposto una variabile che terrà in memoria la mail che di volta in volta il ciclo FOR selezionerà dalla lista mail autorizzate:
    const thisMail = mailList[i];
    
// Con una IF controllo se la mail inserita dall'utente si trova nella lista mail autorizzate(mailFound = true):
    if(thisMail === userMail) {
    mailFound = true;
    }
}

// Con un'altra IF comunico all'utente attraverso un alert se la sua mail è autorizzata, altrimenti comunico che non ha accesso ai servizi:
if(mailFound) {
    alert('La tua mail è autorizzata per accedere ai nostri servizi!');
} else {
    alert('Purtroppo la tua mail non risulta autorizzata per accedere ai nostri servizi. Per qualsiasi informazione contatta il nostro call center al numero 800-JAVASCRIPT-666 ');
}
