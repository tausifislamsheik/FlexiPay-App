document.getElementById('login-btn').addEventListener('click', function(){
    const mobileInputField = document.getElementById('number-input-field').value;
    const mobileInputFieldNumber = parseFloat(mobileInputField);
    const pinInputField = document.getElementById('pin-input-field').value;
    const pinInputFieldNumber = parseFloat(pinInputField);
    if(mobileInputFieldNumber === 1713456789 && pinInputFieldNumber === 12345){
        window.location.href = './home.html'
    }else{
        alert("Oops! PIN or number is incorrect.");
    }
    
})