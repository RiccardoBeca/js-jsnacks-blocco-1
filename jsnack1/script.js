/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore


 1.creo due prompt per chiedere all'utente di inserire due numeri
 2.if statement per dichiarare il maggiore tra i due numeri inseriti
 3.stampo il numero maggiore con innerHTML

*/



const firstNumber = prompt("Inserisci un numero");
const secondNumber = prompt("Inserisci un altro numero");


if (firstNumber < secondNumber) {
  document.getElementById("out-put-number").innerHTML = secondNumber;
}
else if (firstNumber > secondNumber) {
  document.getElementById("out-put-number").innerHTML = firstNumber;
}
else if ((firstNumber || secondNumber) == null) {
  document.getElementById("out-put-text").innerHTML = " ";

}
else if (firstNumber === secondNumber) {
  document.getElementById("out-put-number").innerHTML = "Inserisci due numeri diversi tra di loro perfavore";
}




//-------------- FINE JSNACK1-------------- //




