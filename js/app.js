function generatePassword(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++)
  {
    let randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt((randomIndex));
  }

  return result;
}

let generateButton = document.getElementById('generate');
let copyButton = document.getElementById('copy');

generateButton.addEventListener('click', function () {
  let longPassword = prompt("How long password: ");
  let Password = generatePassword((longPassword));
  console.log(Password)
  let outputPassword = document.getElementById('Password');

  outputPassword.textContent = Password;

  copyButton.addEventListener('click', function () {
    let tempInput = document.createElement('input');
    tempInput.value = Password;

    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0,99999);

    document.execCommand('copy');

    document.body.removeChild(tempInput);

  });

});

