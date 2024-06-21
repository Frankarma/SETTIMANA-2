/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


function area(l1, l2) {
    return l1 * l2;
}

// Esempio di utilizzo:
let lunghezza = 5;
let larghezza = 10;
console.log("L'area del rettangolo è:", area(lunghezza, larghezza));



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
    let sum = num1 + num2;
    if (num1 === num2) {
        return sum * 3;
    } else {
        return sum;
    }
}

console.log(crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
    let diff = Math.abs(num - 19);
    if (num > 19) {
        return diff * 3;
    } else {
        return diff;
    }
}

console.log(crazyDiff(22));  
console.log(crazyDiff(10));



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(50));  // Output: true (perché 50 è tra 20 e 100)
console.log(boundary(150)); // Output: false (perché 150 non è tra 20 e 100 e non è 400)
console.log(boundary(400)); // Output: true (perché 400 è esattamente 400)



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
    if (str.startsWith("EPICODE")) {
        return str;
    } else {
        return "EPICODE " + str;
    }
}

console.log(epify("Learning is fun!")); // Output: "EPICODELearning is fun!"
console.log(epify("EPICODE rocks!"));   // Output: "EPICODE rocks!" (non alterata)


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


function check3and7(num) {
    if (num <= 0) {
        throw new Error("Il numero deve essere positivo");
    }
    
    if (num % 3 === 0 || num % 7 === 0) {
        return true;
    } else {
        return false;
    }
}



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


console.log("#### ");

function reverseString(str) {
    let arrayOfChars = str.split('');
    
    let reversedArray = arrayOfChars.reverse();
    
    let reversedString = reversedArray.join('');
    
    return reversedString;
}

console.log(reverseString("EPICODE"));




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str) {
    // Divide la stringa in un array di parole
    let words = str.split(' ');
    
    // Mappa ogni parola per rendere maiuscola la prima lettera
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Unisce tutte le parole per formare la stringa risultante
    let result = capitalizedWords.join(' ');
    
    // Restituisce la stringa con le prime lettere maiuscole
    return result;
}

console.log(upperFirst("hello world")); // Output: "Hello World"
console.log(upperFirst("the quick brown fox")); // Output: "The Quick Brown Fox"
console.log(upperFirst("javascript is awesome")); // Output: "Javascript Is Awesome"


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
    if (str.length <= 1) {
        return ""; // Se la stringa ha lunghezza <= 1, non ci sono caratteri da tagliare
    }
    // Utilizza .slice() per ottenere una sottostringa escludendo il primo e l'ultimo carattere
    return str.slice(1, -1);
}

console.log(cutString("Hello")); // Output: "ell"
console.log(cutString("JavaScript")); // Output: "avaScrip"
console.log(cutString("a")); // Output: "" (stringa vuota, perché non ci sono caratteri da tagliare)


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    let randomNumbers = [];

    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 11); // Genera un numero casuale tra 0 e 10
        randomNumbers.push(randomNumber); // Aggiungi il numero casuale all'array
    }

    return randomNumbers;
}

console.log(giveMeRandom(5)); // Output: un array di 5 numeri casuali tra 0 e 10, ad esempio [2, 8, 5, 1, 9]
console.log(giveMeRandom(3)); // Output: un array di 3 numeri casuali tra 0 e 10, ad esempio [7, 3, 0]
