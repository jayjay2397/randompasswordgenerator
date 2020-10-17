// Assignment Code
var generateBtn = document.querySelector("#generate");

//Defined Variables 

var loweralpha = "abcdefghijklmnopqrstuvwxyz".split("");
var upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialchar = "!@#$%^&&*_-+={}[]|~`?<>/".split("");
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumbers;
var confirmUpperCase;
var confirmLowerCase;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  function generatePassword() {
    var confirmLength = (prompt("Choose a password between 8-128 characters"));
    // Loop if answer is outside the parameters 
    if (confirmLength <= 8 || confirmLength >= 128) {
      alert(`Your password will have ${confirmLength} characters`);
      return;
    }  



      // Determine the characters of the password 
      var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
      var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numbers");
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase leters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase letters");
      // Loop if answer is outside the criteria 
      if (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one");
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumbers = confirm("Click OK to confirm if you would like to include numbers");
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase letters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase letters");
      }

      var passwordCharacters = []

      if (confirmSpecialCharacter) {
        passwordCharacters = passwordCharacters.concat(specialchar)
      }

      if (confirmNumbers) {
        passwordCharacters = passwordCharacters.concat(numbers)
      }

      if (confirmLowerCase) {
        passwordCharacters = passwordCharacters.concat(loweralpha)
      }

      if (confirmUpperCase) {
        passwordCharacters = passwordCharacters.concat(upperalpha)
      }

      console.log(passwordCharacters)

      // the loop for random password
      var randomPassword = "";

      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;

    }
  


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);