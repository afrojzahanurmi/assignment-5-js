document.getElementById('donate-btn-noa').addEventListener('click', function(event){
    event.preventDefault();
    const noaDonateMoney = getValueById('Donate-amount-noa') 
    const  noaForMoney = getTextById('btn-noa');

    if (isNaN(noaDonateMoney)|| noaDonateMoney<0) {
        alert ('failed to add money');
        return;
    }
    

   const totalNoaForMoney = noaDonateMoney+noaForMoney;
   document.getElementById('btn-noa').innerText=totalNoaForMoney;
   const remainingNoaMoney = getTextById('total-donate');
   const forNoaMoney= remainingNoaMoney-totalNoaForMoney;
   document.getElementById('total-donate').innerText= forNoaMoney;


//    added history part

const div = document.createElement('div');
div.classList.add('bg-gray-100 border rounded-xl ')
div.innerHTML=`
<p class="text-2xl font-semibold px-5"> ${totalNoaForMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh </p>`
  
document.getElementById('history-container').appendChild(div);


})


document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const feniDonateMoney= getValueById('feni-amount');
    const feniForMoney = getTextById('feni-btn');

    if (isNaN(feniDonateMoney)|| feniDonateMoney<0) {
        alert ('failed to add money');
        return;
    }
    const totalFeniForMoney = feniDonateMoney+feniForMoney;
    document.getElementById('feni-btn').innerText=totalFeniForMoney;

    const remainingFeniMoney = getTextById('total-donate');
    const forFeniMoney= remainingFeniMoney-totalFeniForMoney;
    document.getElementById('total-donate').innerText= forFeniMoney;
})

document.getElementById('Quota-donate-btn').addEventListener('click', function(event){
    event.preventDefault();
    const QuotaDonateMoney= getValueById('Quota-amount');
    const QuotaForMoney = getTextById('Quota-btn');

    if (isNaN(QuotaDonateMoney)|| QuotaDonateMoney<0) {
        alert ('failed to add money');
        return;
    }
    const totalQuotaForMoney = QuotaDonateMoney+QuotaForMoney;
    document.getElementById('Quota-btn').innerText=totalQuotaForMoney;

    const remainingQuatMoney = getTextById('total-donate');
    const forQuotaMoney= remainingQuatMoney-totalQuotaForMoney;
    document.getElementById('total-donate').innerText= forQuotaMoney;
})