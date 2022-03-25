/*Creare una funzione che stampa il cubo dei primi N numeri, dove N è un
numero indicato dall’utente.
Una volta creata la funzione chiedere all'utente di inserire N con un
prompt e richiamate la funzione per dare la risposta all'utente.*/

let arrayEsponenti = [];
let numero = parseInt(prompt ("Inserisci il tuo numero"));
let numeri = Cubo(numero);

// Creo La Funzione
function Cubo(N){
   while (N > 0)
    {
        expo =  Math.pow(N,3);
        console.log(expo);
        arrayEsponenti.push(expo);
        N -- ;
    }
}
alert(arrayEsponenti);