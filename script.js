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
  var lowerC = confirm("Would you like to use lower case characters?");
  var upperC = confirm("Would you like to use upper case characters?");
  var numbers = confirm("Would you like to use numbers?");
  var specialChar = confirm("Would you like to use special characters?");
  const symbols = '~!@#$%^&*(){}[]=<>/,.+-:"';
  var passwordLength = prompt("How many characters should the password have? Enter a number between 8 and 128 ");
  var passwordArray = [];

  //Used String fromCharCode() Method for picking random characters and then pushing them to passwordArray[]
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
    if (passwordLength < 8 || passwordLength > 128) {
      return alert("Password must have a minimum of 8 characters and a maximum of 128");
    }
  }
  if (isNaN(passwordLength) == true || passwordLength == "") {
    alert("Value entered must be a number")
  }

  //Used Fisher-Yates Algorithm to shuffle the array, otherwise the function would return the same pattern (lower,upper,number,special character) Learned about it on https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
  for (var i = passwordArray.length-1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = passwordArray[i]
    passwordArray[i] = passwordArray[j]
    passwordArray[j] = temp
  }
  //Because of the while loop, sometimes the function would return an array longer by 1 to 3 characters, depending on options chosen. By setting the array length equal to the user's input I make sure the password is never longer than it should be
  passwordArray.length = passwordLength;
  //This removes the commas in the array
  return passwordArray.join("")
  
}



