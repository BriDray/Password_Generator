// Assignment Code

// define variables and arrays
var pswdLength = 0;
var lowercase = false;
var uppercase = false;
var numbers = false;
var specialCharacters = false;
var password = "";

var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "?"];
var userChoicesArray = [];

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var inputCorrect = promptUser();
  var passwordText = document.querySelector("#password");

  if (inputCorrect) {
    var userPassword = generatePassword();
    console.log(userPassword);
    passwordText.value = userPassword;
  } else {
    passwordText.value = "error";
  }

  passwordText.value = password;

}

function promptUser() {
  userChoicesArray = []
  pswdLength = prompt("Enter a Password length from 8 - 128.");

  if (isNaN(pswdLength) || pswdLength < 8 || pswdLength > 128) {
    alert("Password length must be between 8 and 128. Please try again.")
    return false;
  }
  if (confirm("Click ok to include lowercase charaters to your password.")) {
    userChoicesArray = userChoicesArray.concat(lowercaseArray);
  }
  if (confirm("Click ok to include uppercase charaters to your password.")) {
    userChoicesArray = userChoicesArray.concat(uppercaseArray);
  }
  if (confirm("Click ok to include number charaters to your password.")) {
    userChoicesArray = userChoicesArray.concat(numbersArray);
  }
  if (confirm("Click ok to include special charaters to your password.")) {
    userChoicesArray = userChoicesArray.concat(specialArray);
  }

  return true;
}


function generatePassword() {
  for (var i = 0; i < pswdLength; i++) {
    var randomValue = Math.floor(Math.random() * userChoicesArray.length);
    password += userChoicesArray[randomValue];

  }

  return password;
}

