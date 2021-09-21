var btns = document.querySelectorAll('.btn');
var valueCounter =document.querySelector('#value');


var count=0;
if(localStorage.getItem('yourCounter')==null){
    colorCounter();
    valueCounter.textContent = count;
    localStorage.setItem('yourCounter',count);
    
}
else{
    count =localStorage.getItem('yourCounter');
    colorCounter()
    valueCounter.textContent= count;
}



btns.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(btn.className.includes('increase')){
            count++;
        }
        else if(btn.className.includes('decrease')){
            count--;
        }
        else{
            count=0;
        }
        colorCounter();
        valueCounter.textContent=count;
        localStorage.setItem('yourCounter',count);
    })

})

function colorCounter(){
    if(count>0){
        valueCounter.style.color='green';
    }
    if(count<0){
        valueCounter.style.color = 'red'
    }
    if(count==0){
        valueCounter.style.color = '#102a42';
    }
}