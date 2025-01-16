/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

const filterVowel = (stringa) => {
    let countVowel = 0;
    const vowels = 'aeiou';

    for (let i = 0; i < stringa.length; i++){
        if(vowels.includes(stringa[i].toLowerCase())){countVowel++}
    }
return countVowel;
}
    

// Invoca la funzione qui e stampa il risultato in console

console.log( `Nella parola ${word} ci sono ${filterVowel(word)} vocali`)
    

//Risultato atteso se si passa 'javascript': 3 (a, a, i)