// Assignment Code
// Promt the user with a request of lenght of password
// Make sure the user follows that specfic length
// Makes sure the user follows the number
// If users gives invald answer send them an alert reasking the question 
// Using window.confirm as te user what they wish have in their password ex. numbers letters symbols
// Once they confirm use the answers * by the chosen lenght in a random fasion
// Then display the password to the user
var generateBtn = document.querySelector("#generate");
//const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];
const alphafalse = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-+, =]';
const numbers = '0123456789';
//const symbols = '!@#$%^&*_-+=';
var passwordLength = 25;
var password = "";
const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
var userChoice;

//var specialchracter = false;
//var userChoice;
// retVal = numbers.charAt(Math.floor(Math.random() * n));
// retVal1 = alphafalse.charAt(Math.floor(Math.random() * n));
var compChoice;
var gameResult;
let start = window.prompt(" Choose 'n', or 'a'")
yes = password += alpha.substring(randomNumber, randomNumber + 1);

// if (start.toLowerCase() == "n") {
//     userChoice = "n";
//     var i = 0, n = numbers.length; i < length; ++i;
//     retVal += numbers.charAt(Math.floor(Math.random() * n));

// } else {

// } (start.toLowerCase() == "a");
// userChoice = "a";

for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * alphafalse.length);
    password += alphafalse.substring(randomNumber, randomNumber + 1,);
}



for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * alpha.length);
    password += alphafalse.substring(randomNumber, randomNumber + 1,);
}
document.getElementById("password").value = password;

function generatePassword() {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '='];
    const alphafalse = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let lengthOfPassword = window.prompt(" How long do you want you password?")
    let Numeric = window.prompt(" Would you like your password to use numbers?")
    if (Numeric.toLowerCase() == "yes"){
        userChoice = "yes";
        var i = 0; i <= passwordLength; i++ 
            var randomNumber = Math.floor(Math.random() * alphafalse.length);
            password += alphafalse.substring(randomNumber, randomNumber + 1,);
            return(password)
      }
    
    let passwordSymbols = window.prompt(" Would you like your password to use special characters?")
    console.log(lengthOfPassword);

    const a = 8;
    const b = 128;


    if (start.toLowerCase() == "yes"){
        userChoice = "r";
        var i = 0; i <= passwordLength; i++ 
            var randomNumber = Math.floor(Math.random() * alphafalse.length);
            password += alphafalse.substring(randomNumber, randomNumber + 1,);
      }
    
    
    if(lengthOfPassword >= a || lengthOfPassword <= b);
     {
        var randomNumber = Math.floor(Math.random() * alpha.length);
        
    }
    console.log(Numeric);
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * alpha.length);
        password += numbers.substring(randomNumber, randomNumber + 1,);
    }
    console.log(passwordSymbols);
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * alphafalse.length);
        password += alphafalse.substring(randomNumber, randomNumber + 1,);
    }
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//     var length = 25;

//     const cb = document.querySelector('specialchracter');



    return password ;
    passwordText.value = password;

 }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

