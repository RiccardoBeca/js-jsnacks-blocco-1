
/*
 JSNACK 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.


 1.creo due prompt per chiedere all'utente di inserire due numeri
 2.dichiaro  quale e' la parola piu corta e quella piu lunga tra le due
 3.stampo prima la parola piu' corta e poi quella piu' lunga


*/


const firstWord = prompt("Scrivi una parola");
const secondWord = prompt("Scrivine un'altra");


if (firstWord.length > secondWord.length){
  document.getElementById("out-put-text").innerHTML = secondWord + " " + firstWord;
}
else if (firstWord.length < secondWord.length){
  document.getElementById("out-put-text").innerHTML = firstWord + " "+ secondWord;
}
else if ((firstWord || secondWord) == null) {
  document.getElementById("out-put-text").innerHTML = " ";
}
else if (firstWord === secondWord) {
  document.getElementById("out-put-text").innerHTML = "Inserisci due parole diverse perfavore";
}
