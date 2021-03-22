// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Tiro dadi
var tiraDado = prompt(' Scrivi "Tira Dado" ');


// Numeri Random
if (tiraDado === "Tira Dado") {
    var dadoUmano = Math.floor((Math.random() * 6) + 1);
    var dadoComputer = Math.floor((Math.random() * 6) + 1);

} else {
    alert("Comando invalido");
}

console.log('Dado PC', dadoComputer);
console.log('Dado umano', dadoUmano);

// Condizioni Vittoria
if (dadoUmano > dadoComputer) {
    alert("Hai vinto!");
} else if (dadoUmano === dadoComputer) {
    alert("Parità!");
} else {
    alert("Hai perso!");
}