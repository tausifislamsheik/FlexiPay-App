document.getElementById('CashOut-btn').addEventListener('click', function(){
       const cashOutAmount = getInputFieldValueById('Cash-out-amount');
       const cashOutPin = getInputFieldValueById('cashOut-pin');
       if(cashOutPin === 12345){
          const balance = getTextFieldValueById('account-balance');
          if(isNaN(cashOutAmount)){
            alert('Failed to cash out!');
            document.getElementById('Cash-out-amount').value = '';
            document.getElementById('cashOut-pin').value = '';
            return;
          }
          if(cashOutAmount > balance){
            alert("⛔ Oops! You're trying to cash out more than your available balance.!");
            document.getElementById('Cash-out-amount').value = '';
            document.getElementById('cashOut-pin').value = '';
            return;
          }
          const newBalance = balance - cashOutAmount;
          document.getElementById('account-balance').innerText = newBalance;
       }else{
        alert('Oops!! Failed to cash out');
       }
            document.getElementById('Cash-out-amount').value = '';
            document.getElementById('cashOut-pin').value = '';
});