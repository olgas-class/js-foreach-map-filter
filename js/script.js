// COPIA CI ARRAY E OBJECT
// const myNumbers = [1, 4, 6, 15];
// const copyMyNumbers = myNumbers;
// 
// const realCopyNumbers = [];
// 
// for (let i = 0; i < myNumbers.length; i++) {
//     realCopyNumbers.push(myNumbers[i]);
// }
// 
// console.log(myNumbers, "originale");
// console.log(copyMyNumbers, "copy");
// console.log(realCopyNumbers, "copia vera");
// 
// myNumbers.push(23);
// console.log("MODIFICA");
// console.log(myNumbers, "originale");
// console.log(copyMyNumbers, "copy");
// console.log(realCopyNumbers, "copia vera");
// 

// const myObject = {
//     name: "Olga",
//     lastName: "Demina"
// }
// 
// const myObjectCopy = myObject;
// 
// const realObjectCopy = {}
// 
// for( let key in myObject) {
//     // creare chiave         inserire valore corrispondente
//     realObjectCopy[key] = myObject[key];
// }
// 
// console.log(myObject, "original");
// console.log(myObjectCopy, "copy");
// console.log(realObjectCopy, "copia vera");
// 
// console.log("MODIFICA");
// const newKey = "age";
// myObjectCopy[newKey] = 36;
// 
// console.log(myObject, "original");
// console.log(myObjectCopy, "copy");
// console.log(realObjectCopy, "copia vera");
// 
// 

// ARROW FUNCIONS

// la funzione che restituisce il quadrato di un nuero dato
const myArrow = (num) => {
    // altri calcoli
    return num * num;
}

// const myArrow = (num) => num * num;
// 
// console.log(myArrow(5));
// console.log(myArrow(4)); // ---> 16

// FOREACH
// const myNumbers = [1, 4, 6, 15];
// 
// // for (let i = 0; i < myNumbers.length; i++) {
// //     console.log(myNumbers[i]); --> item
// //          i ---> index
// //             myNumbers ---> originalArray
// // }
// 
// myNumbers.forEach((currentItem) => {
//     console.log(currentItem);
// });

// MAP
// partendo da un'array di numeri, creare un'altro array che contiene i quadrati di questi numeri
const myNumbers = [1, 4, 6, 15]; // ---> [1, 16, 36, ..]

// const squaresArray = [];
// myNumbers.forEach((currentNumber) => {
//     squaresArray.push(currentNumber * currentNumber);
// });

// console.log(squaresArray, myNumbers);
// trasformazione di ogni elemento di array originale e lo pusha nell'array nuovo
// const squaresArray = myNumbers.map((item) => {
//     const square = item * item;
//     return square; // --> avviene il push
// });

const squaresArray = myNumbers.map((item) => item * item);

console.log(squaresArray);

// FILTER

const teams = [
    {
        name: "Milan",
        puntiFatti: 78,
        falliSubiti: 56
    }, 
    {
        name: "Juve",
        puntiFatti: 56,
        falliSubiti: 10
    },
    {
        name: "Fiorentina",
        puntiFatti: 80,
        falliSubiti: 40
    }
]; 

// Partendo dall'array originale, creare un'array di squadre che hanno fatto più di 70 punti
// 
// const bestTeams = [];
// for (let i = 0; i < teams.length; i++) {
//     // Per ogni oggetto se punti fatti è maggiore di 70
//     //  inserire quest'oggetto nell'array bestTeams
//     const thisTeam = teams[i];
//     if (thisTeam.puntiFatti > 70) {
//         bestTeams.push(thisTeam);
//     }
// }
// 
// console.log(bestTeams);

const bestTeams = teams.filter((item) => item.puntiFatti > 70);

console.log(bestTeams);