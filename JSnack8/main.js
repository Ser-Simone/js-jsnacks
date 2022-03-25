/*Crea una funzione chiamata sommaNumeri che dato un array di 10
numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca
come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto*/

const Numero = [5,5,5,5,6,5,5,5,5,5];
sommaNumeri(Numero);

// Creo La Funzione
function sommaNumeri(Num){
    let sum =0;
    for (let i = 0; i < Num.length; i++) {
        sum += Num[i];
    }
    console.log(sum);
}