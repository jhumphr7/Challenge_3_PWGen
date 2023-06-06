// Assignment Code
var generateBtn = document.querySelector("#generate");

// what happens when I click the button
function generatePassword() {

  // question of how many characters  
  var passLength = prompt("How many characters should I use for your password?");

  // Will return them back to question and notify to pick between 8 - 128 characters 
  if (passLength < 8 || passLength > 128) {
    alert("Please select a value between 8 and 128 characters");
    return;
  }


  // Characters that get selected when you answer the questions - bank of letters, etc....
  var all = ""
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var symbols = "!@#$%^&*()[]{}?";
  var numbers = "1234567890"


  // Questions to select the parameters of the the password - (+= brings this into "all variable")
  // var here if need value at later time 

  if (confirm("Should I add uppercase letters to your password?")) {
    all += upperCase
  }

  if (confirm("Should I add lowercase letters to your password?")) {
    all += lowerCase
  }

  if (confirm("Should I add symbols to your password?")) {
    all += symbols
  }

  if (confirm("Should I add numbers to your password?")) {
    all += numbers
  }


  // Loop to run the program

  let newPassword = ""

  for (let i = 0; i < passLength; i++) {

    // TODO: Grab a random character from the "all" character bank
    // gives random number between 0 and length of "all" character string
    var randomIndex = Math.floor(Math.random() * all.length)
    var randomCharacter = all[randomIndex]

    // TODO: Concatenate random character to newPassword
    newPassword += randomCharacter 

  }

  return newPassword;

  // closing generatePassword 
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
