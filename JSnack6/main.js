/*Fate generare un numero random da 0 a 10 al computer, e chiedete
all'utente di inserire un suo numero. Se il numero scelto dall'utente è
uguale al numero del computer informate l'utente che ha vinto, altrimenti
ha perso. 
A questo punto fate giocare l'utente, fintanto che non vince la partita
contro il PC :)*/

let i = 1;

while(i==1)
{
    let numero = prompt("Scegli un numero compreso tra 1 e 10")
    let numeroR = Math.floor(Math.random(1) * 10);
if (numero == numeroR)
{
    alert("Hai vinto");
    i--;
}else
{
    alert("Hai perso"); 
}
}