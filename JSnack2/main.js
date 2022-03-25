/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/


let parola1 = prompt ("Inserisci il primo numero");
let parola2 = prompt ("Inserisci il secondo numero");

if(parola1>parola2)
{
    console.log(parola2);
}else if(parola1<parola2)
{
    console.log(parola1);
}

