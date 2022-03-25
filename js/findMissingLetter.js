// Find the missing letter 
// Write a method that takes an array of consecutive (increasing) letters as input and that returns  the missing letter in the array. 
// You will always get an valid array. And it will be always exactly one letter be missing. The length  of the array will always be at least 2. 
// The array will always contain letters in only one case. (Use the English alphabet with 26 letters!) 
// Examples (Input --> Output) 
// ['a','b','c','d','f'] -> 'e'  
// ['O','Q','R','S'] -> 'P' 
// ["a","b","c","d","f"] -> "e" 
// ["O","Q","R","S"] -> "P" 

// Base function

function findMissingLetter(array) {
    //Convert ASCII value
    let asciiValue = array.map(char => char.charCodeAt())
    //find missing Value
    for(let i = 0; i < asciiValue.length; i++) {
        if(asciiValue[i+1] !== undefined) {
            if(asciiValue[i+1] !== asciiValue[i]+1) {
                return String.fromCharCode(asciiValue[i]+1)
            } else {
                continue
            }
        } else {
            return String.fromCharCode(asciiValue[i] + 1)
        }
    }
}



module.exports = findMissingLetter