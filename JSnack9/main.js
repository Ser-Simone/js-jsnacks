/*Crea una funzione chiamata mediaAritmetica che prende in input un
array di 10 numeri e restituisca la media aritmetica dei numeri contenuti
nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per
calcolare la media dei 10 numeri che vanno chiesti all'utente attraverso
dei prompt.*/

let ArrayNumero = [];

for (let i = 0; i <10; i++) {
    let Numero = parseInt(prompt ("Inserisci il tuo numero"));
    ArrayNumero.push(Numero);
}

let media = mediaAritmetica(ArrayNumero);
console.log(media);

// Creo La Funzione Somma
function sommaNumeri(array){

    let sum =0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
//Funzione media aritmetica
function mediaAritmetica(array2)
{
    let somma = sommaNumeri(array2);
    let mediaInt = somma/10
    return mediaInt;
}