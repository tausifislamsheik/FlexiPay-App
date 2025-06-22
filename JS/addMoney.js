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

        // Add to transaction history 
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between bg-white p-4 rounded-2xl mt-3';
        div.innerHTML = `  
             
                <img class="w-12 h-12 bg-slate-100 rounded-full p-3 " src="images/wallet1.png" alt="">
                <div class="mr-40">
                   <p class="font-bold">Bank Deposit</p>
                   <p><span class="font-bold">$ </span>${addMoney}</p>
                </div>
                <p class="my-2 cursor-pointer"><i class="fa-solid fa-ellipsis-vertical"></i></p>
             
        `;
        document.getElementById('transaction-container').appendChild(div);
    }else{
        alert('Oops! Failed to add money')
    };

        document.getElementById('addMoney-input-field').value = '';
        document.getElementById('pin-input-field').value = '';
    
})