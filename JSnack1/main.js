/*L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.*/


let numero1 = prompt ("Inserisci il primo numero");
let numero2 = prompt ("Inserisci il secondo numero");

if(numero1>numero2)
{
    console.log(numero2);
}else if(numero1<numero2)
{
    console.log(numero1);
}

