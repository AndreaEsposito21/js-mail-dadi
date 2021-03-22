// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// Mail Utente
var mailUtente = prompt("Scrivi la tua email");

// Lista delle mail che possono accedere
var mailConsentite = ["ludovicojamboni@gmail.com", "gianframmarconi@yahoo.com", "scapillazzuli@outlook.com", "wildjohnny@rocketmail.com", "trefrizzacchio@libero.it"];
var emailConfermata = false;

for (var i = 0; i < mailConsentite.length; i++) {
    var emailGiusta = mailConsentite[i];

    if (emailGiusta === mailUtente) {
        emailConfermata = true;
    }  
}

// Risposta a schermo se email valida oppure no
if (emailConfermata === true) {
    alert("Email Valida");
} else {
    alert("Email Non Valida");
}