// Array.diff 
// Implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b keeping their order. 
// Examples (Input --> Output) 
// arrayDiff([1,2],[1]) --> [2] 
// arrayDiff([1,2,2,2,3],[2]) --> [1,3] 

// Base function 
function arrayDiff(a, b) { 
    // your code goes here 
    return a.filter(num => !b.some(someNum => someNum === num ));
} 

module.exports = arrayDiff