/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const filterVowel = (stringa) => stringa.split("").filter(vocale => 'aeiou'.includes(vocale.toLowerCase())).length;


// Invoca la funzione qui e stampa il risultato in console

console.log( `Nella parola ${word} ci sono ${filterVowel(word)} vocali`)
    

//Risultato atteso se si passa 'javascript': 3 (a, a, i)