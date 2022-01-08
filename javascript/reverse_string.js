function reverseString(str) {
  let newString = ""
  for (let i = str.length -1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}




if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("Expecting: airam");
  console.log("=>", reverseString("maria");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// starting at the last index, add each letter in turn to the new string

// And a written explanation of your solution
// set new string to empty string
// for each loop, starting at the last index and decrementing to go backwards
// add each letter in turn to the new string to be returned. 
