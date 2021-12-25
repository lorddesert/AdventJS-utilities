// function canReconfigure(from, to) {
//   if (from.length !== to.length) return false
  
//   if (from === to) return true

//   let repeatedLetters = findRepeatedChars(from, to)
//   console.log({repeatedLetters})
    
//   for (let i = 0; i < from.length; i++) {
//     let discrepancy = false
//     repeatedLetters.forEach(arr => {
//       if (!arr.includes(from[i]))
//         discrepancy = true
//     })
    
//     if (discrepancy) {
//       console.log('asd', discrepancy)
//       return false
//     }
//   }
  
// //       if (from[i] === repeatedLetters[0][j] && to[i] !== repeatedLetters[0][j]) return false
// //       if (from[i] === repeatedLetters[1][j] && to[i] !== repeatedLetters[1][j]) return false
        
// //       if (to[i] === repeatedLetters[0][j] && from[i] !== repeatedLetters[0][j]) return false
// //       if (to[i] === repeatedLetters[1][j] && from[i] !== repeatedLetters[1][j]) return false
  
//   return true
// }

// function findRepeatedChars(to, from) {
//     const repeatedLettersTo = []
//     const repeatedLettersFrom = []
    
//     for (let i = 0; i < to.length; i++)
//       if (to.indexOf(to[i]) !== i)
//         repeatedLettersTo.push(to[i])
    
//       for (let i = 0; i < from.length; i++)
//         if (from.indexOf(from[i]) !== i)
//           repeatedLettersFrom.push(from[i])
    
//     return [repeatedLettersTo, repeatedLettersFrom]
//   }

function canReconfigure(from= '', to= '') {
    let fromSet = new Set([...from])
    let toSet = new Set([...to])

    if (from.length !== to.length) return false
    if (fromSet.size !== toSet.size) return false

    return true
}
  




// from = 'xxxMMM'
// to   = 'aaaDDD'
// canReconfigure(from, to)
from = '1299999'
to   = '1231023'
canReconfigure(from, to) // false
// // /* no se puede hacer la transformación:
// X -> X
// B -> X (FALLO, no mantiene el orden de transformación)
// O -> B
// X -> O
// */

// from = 'XBOX'
// to   = 'XOBX'
// canReconfigure(from, to) // true

// from = 'MMM'
// to   = 'MID'
// canReconfigure(from, to) // false
// /* no se puede hacer la transformación:
// M -> M (BIEN, asigna el mismo carácter a si mismo)
// M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
// M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
// */

// from = 'CNAC'
// to   = 'CANC'
// canReconfigure(from, to) // false -> no tiene la misma longitud