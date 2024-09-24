
// for noakhali
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
const presentTime = new Date();

const div = document.createElement('div');

div.innerHTML=`<div class="border rounded-xl mt-8 py-5 "><p class="text-2xl font-semibold px-5"> ${totalNoaForMoney} Taka is Donated for famine-2024 at Noakhali, Bangladesh </p>
<p class="text-2xl px-5"> Date: ${presentTime}</div>
`
 
  
document.getElementById('history-container').appendChild(div);






})

//for feni
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


    // history part
const div = document.createElement('div');

div.innerHTML=`
<div class="border rounded-xl mt-8 py-5 "><p class="text-2xl font-semibold px-5"> ${totalFeniForMoney} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
<p class="text-2xl px-5"> Date: ${presentTime}</div>`
 
  
document.getElementById('history-container').appendChild(div);

})

//for Quota

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


    // history part
const div = document.createElement('div');

div.innerHTML=`
<div class="border rounded-xl mt-8 py-5 "><p class="text-2xl font-semibold px-5"> ${totalQuotaForMoney} Taka is Donated for famine-2024 at Quota, Bangladesh </p>
<p class="text-2xl px-5"> Date: ${presentTime}
</div>
`
 
  
document.getElementById('history-container').appendChild(div);

})