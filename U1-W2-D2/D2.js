/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let numero1 = 5;
let numero2 = 8;

if (numero1 > numero2) {
  console.log("----- ESERCIZIO N. 1 -----");
  console.log("Il numero più grande è: " + numero1)
} else if (numero2 > numero1) {
  console.log("----- ESERCIZIO N. 1 -----");
  console.log("Il numero più grande è " + numero2)
} else {
  console.log("----- ESERCIZIO N. 1 -----");
  console.log("I due numeri sono uguali")
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numero3 = 8;

if (numero3 !== 5) {
  console.log("----- ESERCIZIO N. 2 -----");
  console.log("not equal")
} else {
  console.log("----- ESERCIZIO N. 2 -----");
  console.log("Il numero è uguale")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/


let numero4 = 20;

if (numero4 % 5 === 0) {
  console.log("----- ESERCIZIO N. 3 -----");
  console.log("Divisibile per 5")
} else {
  console.log("----- ESERCIZIO N. 3 -----");
  console.log("Non divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


let numero5 = 5; 
let numero6 = 3; 

if (numero5 === 8 || numero6 === 8 || (numero5 + numero6 === 8) || (numero5 - numero6 === 8) || (numero6 - numero5 === 8)) {
  console.log("----- ESERCIZIO N. 4 -----");
  console.log("Uno dei numeri è 8 oppure la loro somma e/o sottrazione è uguale a 8");
} else {
  console.log("----- ESERCIZIO N. 4 -----");
  console.log("Il numero 8 non è disponibile.");
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 40; 

const shippingCost = 10;

let totalPay;

if (totalShoppingCart > 50) {
  totalPay = totalShoppingCart; 
} else {
  totalPay = totalShoppingCart + shippingCost; 
}

console.log("----- ESERCIZIO N. 5 -----");
console.log("Totale Checkout: " + totalPay);



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/


let totalShoppingCartB = 40; 

const shippingCostB = 10;

const blackFridayDiscount = 0.20; 

let discountedTotal = totalShoppingCartB - (totalShoppingCartB * blackFridayDiscount);

let totalToPay;

if (discountedTotal > 50) {
  totalToPay = discountedTotal; 
} else {
  totalToPay = discountedTotal + shippingCostB; 
}

console.log("----- ESERCIZIO N. 6 -----");
console.log("Totale Checkout: " + totalToPay); 




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/


let num1 = 15;
let num2 = 9;
let num3 = 12;

if (num1 >= num2 && num1 >= num3) {
  primo = num1;
  if (num2 >= num3) {
    secondo = num2;
    terzo = num3;
  } else {
    secondo = num3;
    terzo = num2;
  }
} else if (num2 >= num1 && num2 >= num3) {
  primo = num2;
  if (num1 >= num3) {
    secondo = num1;
    terzo = num3;
  } else {
    secondo = num3;
    terzo = num1;
  }
} else {
  primo = num3;
  if (num1 >= num2) {
    secondo = num1;
    terzo = num2;
  } else {
    secondo = num2;
    terzo = num1;
  }
}

console.log("----- ESERCIZIO N. 7 -----");
console.log("Ordinati dal più alto al più basso: " + primo + ", " + secondo + ", " + terzo);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let valoreAcaso = 33; 

if (typeof valoreAcaso === 'number') {
  console.log("----- ESERCIZIO N. 8 -----");
  console.log("Questo è un numero");
} else {
  console.log("----- ESERCIZIO N. 8 -----");
  console.log("Questo non è un numero");
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/


let numero = 27; 

if (numero % 2 === 0) {
  console.log("----- ESERCIZIO N. 9 -----");
  console.log("Un numero diviso x 2 con resto 0 è sempre pari");
} else {
  console.log("----- ESERCIZIO N. 9 -----");
  console.log("Un numero diviso x 2 con resto diverso da 0 è sempre dispari");
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/


let val = 7;
if (val < 5) {
  console.log("----- ESERCIZIO N. 10 -----");
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("----- ESERCIZIO N. 10 -----");
  console.log("Meno di 10");
} else {
  console.log("----- ESERCIZIO N. 10 -----");
  console.log("Uguale a 10 o maggiore");
}




/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log("----- ESERCIZIO N. 11 -----");
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/


const meB = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

meB.city = "Toronto";
delete meB.lastName;
console.log("----- ESERCIZIO N. 12 -----");
console.log(meB);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("---- NON DISPONIBILE ES. N. 13 -----");

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arrayA = [];

for (let i = 1; i <= 10; i++) {
  arrayA.push(i);
}

console.log("----- ESERCIZIO N. 14 -----");
console.log(arrayA);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
