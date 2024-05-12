//01 Do the below programs in anonymous function & IIFE
//Print odd numbers in an array
//anonymous function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 201, 11];

let oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});
console.log(oddNumbers);


//Convert all the strings to title caps in a string array


var stringArray = ["salut", "tu vas bien", "bonjour", "ami"];

(function(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase().replace(/\b\w/g, function(firstLetter) {
      return firstLetter.toUpperCase();
    });
  }
})(stringArray);

console.log(stringArray);



//Sum of all numbers in an array
var num = [1, 2, 3, 4, 5];

var sum = (function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
})(num);

console.log(sum);



// Return all the prime numbers in an array


var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function(arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  return arr.filter(function(num) {
    return isPrime(num);
  });
})(number);

console.log(primeNumbers);


//Return all the palindromes in an array

const array = ["racecar", "level", "hello", "deified", "world"];

const palindromes = array.filter(str => str === str.split('').reverse().join(''));

console.log(palindromes); 


//Return median of two sorted arrays of the same size.
const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = mergedArray.length;
  const mid = Math.floor(length / 2);
  if (length % 2 === 0) {
      return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
      return mergedArray[mid];
  }
};


const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];


console.log(findMedianSortedArrays(nums1, nums2));






//Remove duplicates from an array
const dupicatarray = [1, 2, 2, 3, 4, 4, 5, 5, 6];

const uniqueArray = (() => {
    const seen = new Set();
    return dupicatarray.filter(item => {
        if (!seen.has(item)) {
            seen.add(item);
            return true;
        }
        return false;
    });
})();

console.log(uniqueArray); 


//Rotate an array by k times


// Example usage:


//02.Do the below programs in arrow functions.

//Print odd numbers in an array
const numbersodd = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbersarrow = numbersodd.filter(num => num % 2 !== 0);

console.log(oddNumbersarrow);

//Convert all the strings to title caps in a string array
//Sum of all numbers in an array
const numéro = [1, 2, 3, 4, 5];
const sum = numéro.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

//Return all the prime numbers in an array

const numbersarro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const primeNumbers = numbersarro.filter(num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true; 
});


console.log(primeNumbers);

//Return all the palindromes in an array





