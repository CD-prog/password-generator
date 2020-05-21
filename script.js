// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function generatePassword() {

  var lowerC = confirm("Would you like to use lower case characters?")
  var upperC = confirm("Would you like to use upper case characters?")
  var numbers = confirm("Would you like to use numbers?")
  var specialChar = confirm("Would you like to use special characters?")
  const symbols = '~!@#$%^&*(){}[]=<>/,.+-:"'
  var passwordLength = prompt("How many characters should the password have? Enter a number between 8 and 128 ")
  var passwordArray = []

  while ((passwordArray.length) < passwordLength) {
    if (lowerC == true) {
      passwordArray.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
    }
    if (upperC == true) {
      passwordArray.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
    }
    if (numbers == true) {
      passwordArray.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));
    }
    if (specialChar == true) {
      passwordArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    if (lowerC == false && upperC == false && numbers == false && specialChar == false) {
      return alert("You must choose at least one type of character");
    }
    if (passwordLength < 8 || passwordLength > 128) { return alert("Password must have a minimum of 8 characters and a maximum of 128. Value entered must be a number") }
  }
    passwordArray.length = passwordLength;
    // console.log(passwordArray)
    return passwordArray.join("")

}



