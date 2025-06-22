document.getElementById('sendNow-btn').addEventListener('click', function(){
    const accountNumber = getInputFieldValueById('user-account-number-input-field')
    const transferMoney = getInputFieldValueById('transferMoney-input-field');
    const transferMoneyPinNumber = getInputFieldValueById('transfer-money-pin-number');
    if(accountNumber === 12345678910 && transferMoneyPinNumber === 12345){
        const balance = getTextFieldValueById('account-balance');
        if(isNaN(transferMoney)){
            alert('Please provide numeric value!!!');
            document.getElementById('user-account-number-input-field').value = '';
            document.getElementById('transferMoney-input-field').value = '';
            document.getElementById('transfer-money-pin-number').value = '';
            return;
        }
        const newBalance = balance - transferMoney;
        document.getElementById('account-balance').innerText = newBalance;

        // Add to transaction history 
        const p = document.createElement('p');
        p.innerHTML = `  
             <div class="flex items-center justify-between bg-white p-4 rounded-2xl mt-3">
                <img class="w-12 h-12 bg-slate-100 rounded-full p-3 " src="images/wallet1.png" alt="">
                <div class="mr-38">
                   <p class="font-bold">Transfer Money</p>
                   <p><span class="font-bold">$ </span>${transferMoney}</p>
                </div>
                <p class="my-2 cursor-pointer"><i class="fa-solid fa-ellipsis-vertical"></i></p>
             </div>
        `;
        document.getElementById('transaction-container').appendChild(p);
    }else{
        alert('Oops! Failed to transfer money')
    };

        document.getElementById('user-account-number-input-field').value = '';
        document.getElementById('transferMoney-input-field').value = '';
        document.getElementById('transfer-money-pin-number').value = '';
    
})