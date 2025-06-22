document.getElementById('getBonus-btn').addEventListener('click', function(){
    const couponInput = document.getElementById('coupon-input');
    
    if(couponInput === 'Get100'){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + 100;
        document.getElementById('account-balance').innerText = newBalance;

        // Add to transaction history 
        const div = document.createElement('div');
        div.className = 'flex items-center justify-between bg-white p-4 rounded-2xl mt-3';
        div.innerHTML = `  
             
                <img class="w-12 h-12 bg-slate-100 rounded-full p-3 " src="images/wallet1.png" alt="">
                <div class="mr-40">
                   <p class="font-bold">Get Bonus</p>
                   <p><span class="font-bold">$ </span>100</p>
                </div>
                <p class="my-2 cursor-pointer"><i class="fa-solid fa-ellipsis-vertical"></i></p>
             
        `;
        document.getElementById('transaction-container').appendChild(div);
    }else{
        alert('Oops! Failed to get bonus')
    }

        document.getElementById('coupon-input').value = '';
        
    
})