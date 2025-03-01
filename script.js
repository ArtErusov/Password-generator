const ps = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  symbols: "!@#$%^&*()-_=+[]{}|;:',.<>?/`~",
  numbers: "1234567890",
};

const passwordLength = document.querySelector(".custom-range");
const passwordDetails = document.querySelector(".pass-lenght .detail span");
const passwordindicator = document.querySelector(".password-indicator");
const generatorButton = document.querySelector(".generate-btn");
const passwordOutput = document.querySelector(".password-output");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const copyButton = document.querySelector(".copy");


const randomInteger = (min, max) =>
  Math.floor(min + Math.random() * (max + 1 - min));

const copyPassword = () =>{
  navigator.clipboard.writeText(passwordOutput.value)
}


const updatePasswordIndicator = (num) => {
  passwordDetails.textContent = num;
  if (num <= 20) {
    passwordindicator.classList.add("weak");
    passwordindicator.classList.remove("strong", "medium");
  } else if (num <= 28) {
    passwordindicator.classList.remove("strong", "weak");
    passwordindicator.classList.add("medium");
  } else {
    passwordindicator.classList.remove("medium", "weak");
    passwordindicator.classList.add("strong");
  }
};


const generatePassword = () => { 
  let passString = ps.lowercase;
  if (uppercase.checked) passString += ps.uppercase;
  if (numbers.checked) passString += ps.numbers;
  if (symbols.checked) passString += ps.symbols;

  const lenght = +passwordLength.value;
  updatePasswordIndicator(lenght);  
    let randomPassword = "";
    for (let i = 0; i < lenght; i++){
      randomPassword += passString[randomInteger(0, passString.length - 1)]
    }
    passwordOutput.value = randomPassword;
    console.log(passString)
    console.log(ps.uppercase)
};

passwordLength.oninput = generatePassword;
copyButton.onclick = copyPassword;
generatorButton.onclick = generatePassword;
