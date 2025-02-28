const ps = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    symbols: "!@#$%^&*()-_=+[]{}|;:',.<>?/`~",
    numbers: "1234567890"
  };

  const passwordLength = document.querySelector('.custom-range');
  const passwordDetails = document.querySelector('.pass-lenght .detail span');
  const passwordindicator = document.querySelector('.password-indicator');

  const updatePasswordIndicator = (num) => {
    passwordDetails.textContent = num;
    if (num <= 20){
      passwordindicator.classList.add('weak');
      passwordindicator.classList.remove('strong');
      passwordindicator.classList.remove('medium');
    } else if(num <= 28){
      passwordindicator.classList.remove('strong');
      passwordindicator.classList.remove('weak');
      passwordindicator.classList.add('medium');
    } else {
      passwordindicator.classList.remove('medium');
      passwordindicator.classList.remove('weak');
      passwordindicator.classList.add('strong');
    }
  }


  const generatePassword = () => {
    const lenght = +passwordLength.value;
    console.log(typeof(lenght), lenght)
    updatePasswordIndicator(lenght)
    
  }



  passwordLength.oninput = generatePassword;
