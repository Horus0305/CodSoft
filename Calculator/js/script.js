let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let operators = Array.from(document.getElementsByClassName('operator'));

let oparray=[];
let btnarray = Array.from(buttons);

operators.forEach(op =>{
    oparray.push(op.innerHTML);
});

let string='';
let answer='';

btnarray.forEach(btn =>{
    btn.addEventListener('click',(e)=>{

        if(e.target.innerHTML =='DEL'){
            string=string.substring(0, string.length-1);
            display.value=string;
        }

        else if(e.target.innerHTML =='AC'){
            string='';
            display.value=string;
        }

        else if(e.target.innerHTML =='='){
            string=eval(string);
            display.value = string;
            answer = string;
        }

        else{
            if((answer == display.value) && !oparray.includes(e.target.innerHTML)){
                string=e.target.innerHTML;
            }
            else{
                string += e.target.innerHTML
            }
            display.value=string;
        }
    });
});


