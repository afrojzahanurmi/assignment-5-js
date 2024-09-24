function getValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
   return inputNumber;
}

function getTextById(id){
const inputTextVAlue = document.getElementById(id).innerText;
const inputTextNumber = parseFloat(inputTextVAlue);
return inputTextNumber;
}


function showSectionByid(id){
document.getElementById('Donate-section').classList.add('hidden');
document.getElementById('history-section').classList.add('hidden');

document.getElementById(id).classList.remove('hidden')

}


function buttonBgColor(event){
    event.classList.add('bg-[#B4F461]');
}


    
document.getElementById('home-btn').addEventListener('click', function(){
    window.location.href='index.html';
    
    
})

