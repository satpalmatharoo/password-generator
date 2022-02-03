//Generator functions
 var generateBtn = document.querySelector("#generate");

document.getElementById("generate").addEventListener("click",writePassword)
function writePassword(){
  console.log("heeeellllllpppp!")
  generatePasswordCriteria();
  
}


function generatePasswordCriteria (){

// Get passsword length from user
 let passwordLength = prompt (
  "How long would you like your password to be? Your password needs to be between 7-128 characters"
);
  // Parse the password length we have got from the user
  const passwordLengthParsed = Number.parseInt(passwordLength);
if (passwordLengthParsed <7 || passwordLengthParsed >128) {
   alert ("your password should be between 7-128");
  return;
} 
if   (Number.isNaN(passwordLengthParsed))  
 {
     alert("Your password length must be a number");
     return;
   }
   
   var password = "";
   password += "qwertyuiopasdfghjklzxcvbnm";

var doesIncludeUppercase = false
 doesIncludeUppercase =confirm ("Do you want your password to include an uppercase?");
if (doesIncludeUppercase) {
  password += "QWERTYUIOPASDFGHJKLZXCVBNM"
  
}

var doesIncludeNumber = false
 doesIncludeNumber = confirm ("Do you want your password to include a number?");
if (doesIncludeNumber) {
  password += "1234567890";
  
}

var doesIncludeSpecialCharacters = false
 doesIncludeSpecialCharacters = confirm ("Do you want your password to include a special charater?");
if (doesIncludeSpecialCharacters) {
  password += "!@#$%^&*(){}[]=<>/,.";
}


   var result ="";
  for (var i = 0; i < passwordLengthParsed; i++) {

  
  
  result += password.charAt(Math.floor(Math.random() * password.length));
}

  document.getElementById("password").value = result;

 }    