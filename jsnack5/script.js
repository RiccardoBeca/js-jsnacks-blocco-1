/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/


const emptyArray = []

for (let i = 0; i < 6; i++) {
 
  const numberAdded = prompt("Inserisci un numero");

  if (numberAdded % 2) {
    emptyArray.push(numberAdded)
    console.log(emptyArray);
  }
}