function getPin(){
     const pin = Math.round(Math.random() * 10000);
     const pinString = pin + '';
     if(pinString.length == 4){
          return pin;
     }
     else{
          // console.log('3 digits does not match calling again', pin);
          return getPin();
     }
}



function generatePin(){
     const pin = getPin();
     document.getElementById('display-pin').value = pin;
}

const keypadButton = document.getElementById('key-pad');
keypadButton.addEventListener('click', function(event){
     const number = event.target.innerText;
     const clacInput = document.getElementById('typed-numbers');

     if(isNaN(number)){
          if(number == 'C'){
               clacInput.value = '';
          }
     }
     else{
         
          const previousNumber = clacInput.value;
          const newNumber = previousNumber + number;
          clacInput.value = newNumber;
     }

})

function verifyPin(){
     const pin = document.getElementById('display-pin').value;
     const typedNumbers = document.getElementById('typed-numbers').value;
     const successMessage = document.getElementById('notify-success');
     const failedMessage = document.getElementById('notify-failed');
     if(pin == typedNumbers){
          successMessage.style.display = 'block';
          failedMessage.style.display = 'none';
     }
     else{
         
          failedMessage.style.display = 'block';
          successMessage.style.display = 'none';
     }
}