/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

const filterLetter = (arr , letter) => {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
            result.push(arr[i]);
          }
        }
        return result;
}



// Invoca la funzione qui e stampa il risultato in console

console.log(filterLetter(names, 'A'));




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]