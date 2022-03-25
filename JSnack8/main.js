/*Crea una funzione chiamata sommaNumeri che dato un array di 10
numeri definito da voi nel codice, ne calcoli la loro somma e la restituisca
come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto*/

let Numero = ["5" , "10", "58", "34", "37", "92", "69", "90", "28", "2"];


// Creo La Funzione
function sommaNumeri(N){
   while (N > 0)
    {
        expo =  Math.pow(N,3);
        console.log(expo);
        arrayEsponenti.push(expo);
        N -- ;
    }
}
alert(arrayEsponenti);