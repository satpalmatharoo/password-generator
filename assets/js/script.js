//Generator functions
var generateBtn = document.querySelector("#generate");

//Array for upper case letters
var upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//Array for lower case letters
var lowerCaseArray = 
[
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

//Array for special characters
var specialCharacters = [
""",
"!",
"#",
"$",
"%",
"&",
"'",
"()",
"*",
"+",
",",
"-",
"."
"/",
":",
";"
"<",
"=",
">",
"?",
"@",
"[",
"\",
"]",
"^",
"_",
"`",
"{",
"|",
"}",
"~",
];

//Array for numbers 1-9
var numbers =[
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
];

//Declaring for future use
function generatePassword () {

  var isLowerCase;
  var isUpperCase;
  var isNumber;
  var isSpecialCharacters;
  var optionsArray = [];
  var resultsArray = [];
  var password= [];
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

//If conditions are met - generate password
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
        if (isSpecialCharacters) {
          optionsArray.push( specialcharactersArray); }
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Function to generate password for user
function passwordGenerator() {
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
1     