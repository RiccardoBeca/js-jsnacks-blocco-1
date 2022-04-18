/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


 1. creo arrray di una lista dei nomi degli invitati alla festa
 2. creo prompt che chiede il nome
 3. "if"  statement( se il prompt name uguale ai nome degli arrei allora stampero' l'autorizzazione alla partecipzione della festa in altri casi verra' negato l'accesso)

*/


const invitedGuests = ["Elon Musk", "Jeff Bezos", "Carlo Verdone"];
 

const guestName = prompt("Hi! What's your name?");

let flag = false;

if (guestName === "" || guestName === " ") {
  document.getElementById("output-text").innerHTML = "Please insert a valid name";
}
else {
  for (let i = 0; i < invitedGuests.length; i++) {
    
   if (guestName === invitedGuests[i]) {
      flag = true;
      console.log(flag);
      console.log(invitedGuests);
      console.log(invitedGuests[i]);
    }
  }

  if (flag) {
    
    document.getElementById("output-text").innerHTML = "Welcome to the party!";
  }
  else {
    document.getElementById("output-text").innerHTML = "We're sorry, you're not invited to the party!";
  }
}


// prova con while //

// while (!flag) {

//   const guestName = prompt("Hi! What's your name?");
 
//   while (guestName === "" || guestName ===  " " ) {
   
//     const guestName = prompt("Hi! What's your name? please!!");
//   }

//   for (let i = 0; i < invitedGuests.length; i++) {
    
//     if (guestName === invitedGuests[i]) {
//       flag = true;
//       document.getElementById("output-text").innerHTML = "Welcome to the party!";
//     }

//   }
  
//   if (flag === false) {
//     document.getElementById("output-text").innerHTML = "We're sorry, you're not invited to the party!";
//   }

// }







