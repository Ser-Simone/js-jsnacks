/*In un array sono contenuti i nomi degli invitati alla festa del grande
Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o
no alla festa.*/

let nome = prompt ("inserisci il tuo nome");
let ListaInvitati = ["Francesco" , "Giacomo", "Simone", "Daniele", "Margot", "Belen", "Sydney", "Elisabetta"];
let pippo = 0;
for(let i = 0; i<ListaInvitati.length; i++)
{
    if(nome == ListaInvitati[i])
    {
        alert (" Prego, puoi entrare")
        pippo=1
        break;
} 
}
 if (pippo==0)
{
alert ("Non puoi partecipare alla festa")
}

