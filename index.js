const screen=document.querySelector('#screen');
buttons=document.querySelectorAll('button');
var screenValue='';
for(item of buttons){
    item.addEventListener('click',function(e){
        buttonText=e.target.innerText;
        if(buttonText=='=')
        {
            screen.value=eval(screenValue);

        }
        else if(buttonText=='AC')
        {
            screen.value='';
            screenValue='';
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }

    });
}

