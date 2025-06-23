document.getElementById('payNow-btn').addEventListener('click', function(){
    const billerAccountNumber = getInputFieldValueById('biller-account-number-input-field')
    const payBillAmount = getInputFieldValueById('payBill-amount-input-field');
    const payBillPinNumber = getInputFieldValueById('payBill-pin-number');
    if(billerAccountNumber === 12345678910 && payBillPinNumber === 12345){
        const balance = getTextFieldValueById('account-balance');
        if(isNaN(payBillAmount)){
            alert('Please provide numeric value!!!');
            document.getElementById('biller-account-number-input-field').value = '';
            document.getElementById('payBill-amount-input-field').value = '';
            document.getElementById('payBill-pin-number').value = '';
            return;
        }
        const newBalance = balance - payBillAmount;
        document.getElementById('account-balance').innerText = newBalance;

        // Add to transaction history 
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between bg-white p-4 rounded-2xl mt-3'
        div.innerHTML = ` 
                <img class="w-12 h-12 bg-slate-100 rounded-full p-3 " src="images/purse1.png" alt="">
                <div class="mr-52">
                   <p class="font-bold">Pay Bill</p>
                   <p><span class="font-bold">$ </span>${payBillAmount}</p>
                </div>
                <p class="my-2 cursor-pointer"><i class="fa-solid fa-ellipsis-vertical"></i></p>
             
        `;
        document.getElementById('transaction-container').appendChild(div);
    }else{
        alert('Oops! Failed to pay bill')
    };

        document.getElementById('biller-account-number-input-field').value = '';
        document.getElementById('payBill-amount-input-field').value = '';
        document.getElementById('payBill-pin-number').value = '';
    
})