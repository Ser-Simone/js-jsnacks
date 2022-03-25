/*Crea una funzione chiamata mediaAritmetica che prende in input un
array di 10 numeri e restituisca la media aritmetica dei numeri contenuti
nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per
calcolare la media dei 10 numeri che vanno chiesti all'utente attraverso
dei prompt.*/

let ArrayNumero = [];
sommaNumeri(ArrayNumero);


for (let i = 0; i < Num.length; i++) {
    let Numero = parseInt(prompt ("Inserisci il tuo numero"));
    ArrayNumero.push(Numero);
}

// Creo La Funzione Somma
function sommaNumeri(Num){
    let sum =0;
    for (let i = 0; i < Num.length; i++) {
        sum += Num[i];
    }
    console.log(sum);
    return sum;
}
//Funzione media aritmetica
function mediaAritmetica()
{
    let media = sum/10
}
/*const Numero = [5,5,5,5,6,5,5,5,5,5];
sommaNumeri(Numero);*/

// Creo La Funzione
function sommaNumeri(Num){
    let sum =0;
    for (let i = 0; i < Num.length; i++) {
        sum += Num[i];
    }
    console.log(sum);
}