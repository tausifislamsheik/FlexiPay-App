document.getElementById('addMoney-btn').addEventListener('click', function(){
    const addMoney = getInputFieldValueById('addMoney-input-field');
    const pinNumber = getInputFieldValueById('pin-input-field');
    if(pinNumber === 12345){
        const balance = getTextFieldValueById('account-balance');
        if(isNaN(addMoney)){
            alert('Failed to add money!!!');
            document.getElementById('addMoney-input-field').value = '';
            document.getElementById('pin-input-field').value = '';
            return;
        }
        const newBalance = balance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
    }else{
        alert('Oops! Failed to add money')
    };

        document.getElementById('addMoney-input-field').value = '';
        document.getElementById('pin-input-field').value = '';
    
})