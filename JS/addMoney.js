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
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
        

    }else{
        alert('Oops! PIN Number is incorrect.')
    };

        document.getElementById('addMoney-input-field').value = '';
        document.getElementById('pin-input-field').value = '';
    
})