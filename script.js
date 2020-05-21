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
const symbols = '!@#$%^&*(){}[]=<>/,.'
var passwordLength = prompt("Number of characters ? 8-128 ")
var passwordItems=[]

while ((passwordItems.length)<passwordLength) {


    if (lowerC == true)  {
      passwordItems.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));}

    if (upperC == true) {
      passwordItems.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65));}

    if (numbers == true){
      passwordItems.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48));}

    if (specialChar == true){
      passwordItems.push(symbols[Math.floor(Math.random() * symbols.length)]);}

    if (lowerC == false && upperC == false && numbers == false && specialChar == false){
      return alert ("Pick something!");
    }
    if (passwordLength < 8 || passwordLength > 128 ){ return alert("Password must have min 8 characters and maximum 128")}
    
    }
    passwordItems.length = passwordLength;
    console.log(passwordItems)
    return  passwordItems.join("")

  }
 


      