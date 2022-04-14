/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/

totalSum = 0;

for (let i = 0; i < 5; i++) {
  let userNumber = parseInt(prompt("Inserisci un numero"));
  totalSum += userNumber;
  console.log(totalSum);
}

document.getElementById("output-text").innerHTML = totalSum;