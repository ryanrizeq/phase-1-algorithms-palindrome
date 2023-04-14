function isPalindrome(word) {
  const inputtedArray = word.split("");
  const reverseArray = [];

  for (let i = inputtedArray.length - 1; i >= 0; i--) {
    reverseArray.push(inputtedArray[i]);
  }

  const reverseWord = reverseArray.join("");

  if (reverseWord === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  1. Initialize a new array that will be the reverse array of the inputted string
  2. Convert the inputted string to an array
  3. Loop through the inputted array from the end of the array to the start
      a. Store the current letter
      b. Push the stored letter to the reverse array
  4. Convert the reverse array back to a string
  5. Compare the two strings
      a. If equal, return true
      b. If not equal, return false
*/

/*
  Function isPalindrome receives a string (word). The function returns true if if the string is a
  palindrome, and false if the string is not a palindrome. This function only deals with lowercase,
  letters-only strings. 
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"))
  
} 

module.exports = isPalindrome;
