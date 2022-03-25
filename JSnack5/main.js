/*Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. Stampa l'array alla fine.*/

let ListaNumeri = [];
let i = 0;
do
{   
    let numero = prompt ("inserisci un numero");
    let somma = numero%2;
    if (somma != 0)
    {
        ListaNumeri.push(numero);
    }
    i++

}while (i<6)

console.log(ListaNumeri)