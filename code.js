let input_box=document.getElementById('inputBox');
let btn=document.querySelectorAll('button');

let btnArr=Array.from(btn);
let result=" ";

btnArr.forEach(b => {
    b.addEventListener('click',(evt) => {
        
        if(evt.target.innerHTML == '='){
            result=eval(result);
            input_box.value=result;
        }
        else if(evt.target.innerHTML == 'AC'){
            result=' ';
            input_box.value=result;
        }
        else if(evt.target.innerHTML == 'DEL'){
            result=result.substring(0,result.length-1);
            input_box.value=result;
        }
        else{
        result+=evt.target.innerHTML;
        input_box.value=result;
        }
    });
});

