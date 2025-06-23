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

          // Add to transaction history 
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between bg-white p-4 rounded-2xl mt-3';
        div.innerHTML = `  
             
                <img class="w-12 h-12 bg-slate-100 rounded-full p-3 " src="images/send1.png" alt="">
                <div class="mr-36">
                   <p class="font-bold">Bank Withdraw</p>
                   <p><span class="font-bold">$ </span>${cashOutAmount}</p>
                </div>
                <p class="my-2 cursor-pointer"><i class="fa-solid fa-ellipsis-vertical"></i></p>
             
        `;
        document.getElementById('transaction-container').appendChild(div);
       }else{
        alert('Oops!! Failed to cash out');
       }
            document.getElementById('Cash-out-amount').value = '';
            document.getElementById('cashOut-pin').value = '';
});