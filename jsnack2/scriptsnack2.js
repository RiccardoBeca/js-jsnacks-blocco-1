/*  JSNACK 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

let output;
let arrFirstWord = [];
let arrSecondWord = [];


while (arrFirstWord.length > 1 || arrFirstWord.length == 0) {
  // trim toglie gli spazi in testa e in coda al momento in cui viene inserita la parola/

  const word = prompt("inserisci una parola").trim();

  // controllo per valore inserito ugaule a 0//
  if (word.length != 0) {
    arrFirstWord = word.split(" ")
  }
  console.log(arrFirstWord);
  if (arrFirstWord.length > 1){
    alert("inserisci solo una parola");
  }
}

while (arrSecondWord.length > 1 || arrSecondWord.length == 0) {
  // trim toglie gli spazi in testa e in coda al momento in cui viene inserita la parola/

  const word = prompt("inserisci un'altra parola").trim();

  // controllo per valore inserito ugaule a 0//
  if (word.length != 0) {
    arrSecondWord = word.split(" ")
  }
  console.log(arrSecondWord);
  if (arrSecondWord.length > 1){
    alert("inserisci solo una parola");
  }
}

console.log(arrFirstWord[0]);
console.log(arrSecondWord[0]);

//  il confronto viene fatto sulla lunghezza del primo elemento stringa dei due array//
if (arrFirstWord[0].length > arrSecondWord[0].length) {
  output = arrSecondWord[0] + " " + arrFirstWord[0];
} else if ( arrSecondWord[0].length > arrFirstWord[0].length) {
  output = arrFirstWord[0] + " " + arrSecondWord[0];
}else {
  output = "inserisci due parole diverse";
}

document.querySelector("h1").innerHTML = output;






  