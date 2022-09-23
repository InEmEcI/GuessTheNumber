
let s = '+0-1-2+45-456';
//Укажем пустую строку чтобы разбить по символам
arr = s.split('');

console.log('Такой массив был:');
console.log(arr);



function testPlus(){
        console.log('Первый элеммент равен  "+" ');
           
        console.log('удалил все минусы ');
        //arr.shift();

        console.log(arr);

        let newArray3 = arr.filter(function(f) { return f !== '-' });
        console.log(newArray3); 

            if (newArray3.includes('+') == true){
                console.log('ОШИБКА ПРИ ВВОДЕ!!!');
            }
            else {
                console.log('ВСЁ ОК!!!');
            };
    
    };





function testMinus(){
          
        console.log('Первый элеммент равен  "-" ');
           
        console.log('удалил все плюсы и первый минус');
        arr.shift();

        let newArray3 = arr.filter(function(f) { return f !== '+' });
        console.log(newArray3); 

            if (newArray3.includes('-') == true){
                console.log('ОШИБКА ПРИ ВВОДЕ!!!');
            }
            else {
                console.log('ВСЁ ОК!!!');
            };   
    
};


function neMinusInePlus(){
    console.log('Первый элеммент НЕ равен "-" и НЕ равен "+"');

    if (arr.includes('+') == true){
        console.log('ОШИБКА ПРИ ВВОДЕ!!!');        
    } else if (arr.includes('-') == true){
        console.log('ОШИБКА ПРИ ВВОДЕ!!!');        
    };

};



if (arr[0] === '-'){
    testMinus();
};



if (arr[0] === '+'){
    testPlus();
};


if (arr[0] !== '-' && arr[0] !== '+'){
    neMinusInePlus();
};

