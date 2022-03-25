/*L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/


let parola1 = prompt ("Inserisci la prima parola");
let parola2 = prompt ("Inserisci la seconda parola");

if(parola1.length>parola2.length)
{
    console.log(parola2);
}else if(parola1.length<parola2.length)
{
    console.log(parola1);
}

