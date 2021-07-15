
// Function namethefunction(){
// alert ("password");
//}


//Generator functions
var generateBtn = document.querySelector("#generate");

//lower case letters
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
var upperCaseLetters = lowerCaseLetters.toUpperCase();
//special characters
var specialCharacters = "&!-£%";

//numbers 1-9
var numbers = "123456789";
var charset = lowerCaseLetters;

// Declaring for future use
function generatePassword (){
  console.log (charaset);
}

function generatePasswordCriteria (){

// Get passsword length from user
const passwordLength = prompt("How long would you like your password to be?  Your password needs to be between 7-128 characters");

// Parse the password length we have got from the user
 const passwordLengthParsed = Number.parseInt(passwordLength);
    if
    (Number.isNaN(passwordLengthParsed))  
 {
     alert("Your password length must be a number");
     return;
   }

   // Valid that the password length is in the correct range
   if (passwordLengthParsed <=7 || passwordLengthParsed >=129) {
     alert ("Your password must be between 8-128 characters");
     return;
   }
const doesIncludeUppercase=confirm ("include uppercase");
const doesIncludeNumber = confirm ("Include number");
const doesIncludeSpecialCharacters = confirm ("Include special");

//Password generates if above conditions are met
if (doesIncludeUppercase) {
  charaset += upperCaseLetters;
}
if (doesIncludeSpecialCharacters)
{
  charset += specialCharacters;
  }
}

function writePassword(){
  generatePasswordCriteria();
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
//Function to generate password for user
function passwordGenerator () {}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Declare variables; remember sqaure for j.arrays
function generatePassword () {

  var isLowerCase;
  var isUpperCase;
  var isNumber;
  var isSpecialCharacters;
  var optionsArray;
  var resultsArray;
  var password;
}
//Making a password length
let passwordLength = prompt (
  "How long would you like your password to be? Your password needs to be between 7-128 characters"
);
passwordLength = Number.parseInt(passwordLength)
//Setting condition statements if/if/else if
if (passwordLength < 8) {
  alert ("Your password must contain more than 7 characters.");
  return;
}else if (!passwordLength > 128)  {
  alert ("Your password can have no more than 128 characters.");
  return;
}

//If conditions are met - generate the users password
if (passwordLength >=8 && passwordLength <=128){
  isUpperCase
  console.log ("Please add Uppercase characters")
  isLowerCase
  console.log ("Please add LowerCase characters")
  isNumber
  console.log ("Please add a Number")
  isSpecialCharacters
  console.log ("Please add a Special Character")

  //Password generates if above conditions are met
  if (isUppercase) {
    optionsArray.push(upperCaseArray); }
    if (isLowerCase) {
      optionsArray.push(lowerCaseArray); }
      if (isNumber) {
        optionsArray.push( numberArray); }
        and (isSpecialCharacters) {
          optionsArray.push( specialcharactersArray); }
  }

function writePassword() {
}
  var password = generatePassword();
var passwordText = document.querySelector("#password");{
  
}
