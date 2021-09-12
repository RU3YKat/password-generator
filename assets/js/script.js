// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var special = ['!','@','#','$','%','^','&','*','(',')','+','=','{','}','[',']','|','?','<',',','>','.'];
var numeric = ['0','1','2','3','4','5','6','7','8','9'];

var userSelect = [];
var passLength = "";
var password = "";

function generatePassword () {
  
  // prompt user for password length and parses string into integer
  passLength =  parseInt(prompt("Let's generate a secure password!\nHow many characters would you like?\nPlease provide a length, between 8 - 128 characters."));
  // test for appropriate response, use recursion to call function again if true
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Oops! Please enter a number between 8 and 128.");
    generatePassword();
  } else {
    // confirm user select for uppercase letters 
    if (confirm("Would you like to include uppercase letters?")) {
      // append uppercase letters to 
      userSelect = userSelect.concat(upperCase);
    };
    // confirm user select for lowercaser letters
    if (confirm("How about lowercase letters?")) {
      userSelect = userSelect.concat(lowerCase);
    };
    // confirm user select for special characters
    if (confirm("Maybe some special characters to add complexity?")) {
      userSelect = userSelect.concat(special);
    };
    // confirm user select for numbers
    if (confirm("Finally, would you like to complete your password with numbers?")) {
      userSelect = userSelect.concat(numeric);
    };
    // validate userSelect array 
    if (userSelect.length === 0) {
      alert("Please try again and select at least one character type.\nThe best passwords have multiple types!");
      generatePassword();
    } else {
       // loop for selected random variables in concatinated userSelect array
      for (i = 0; i < passLength; i++) {
        password +=
          userSelect[Math.floor(Math.random() * userSelect.length)];
      };
    } 
  }

  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)