
let s = '+1-1';
//Укажем пустую строку чтобы разбить по символам
arr = s.split('');

console.log('Такой массив был:');
console.log(arr);




/*
Нужно для минуса вывести ошибку!
*/






function testPlus(){
        console.log('Первый элеммент равен  "+" ');    
        let newArray1 = arr.filter(function(f) { return f !== '-' });
        let newArray2 = newArray1.filter(function(f) { return f !== '+' });
        let strNumber = Number(newArray2.join(''));        
        //newArray2.unshift('-');        
        console.log('Что получилось после обработки:');
        //console.log(strNumber);
        console.log('Удалены "-" и "+" ');
        console.log('Получилось:');
        console.log(strNumber);
        console.log(typeof(strNumber));     
};


function testMinus(){
    {        
        console.log('Первый элеммент равен  "-" ');
        let newArray1 = arr.filter(function(f) { return f !== '-' });
        let newArray2 = newArray1.filter(function(f) { return f !== '+' });        
        newArray2.unshift('-');        
        let strNumber = Number(newArray2.join(''));        
        console.log('Удалены "-" и "+" и добавлен "-" в начало и получилось:');
        console.log(strNumber);
        console.log(typeof(strNumber));            
    };
};



if (arr[0] !== '+' && arr[0] !== '-'){
    let newArray1 = arr.filter(function(f) { return f !== '-' });
    let newArray2 = newArray1.filter(function(f) { return f !== '+' });
    let strNumber = Number(newArray2.join(''));                
    console.log('Первый элеммент НЕ равен  "-" и НЕ равен "+"');
    console.log('Что получилось после обработки:');
    //console.log(strNumber);
    console.log('Удалены "-" и "+"');
    console.log(strNumber);
    console.log(typeof(strNumber)); 
};


if (arr[0] === '-'){
    testMinus();
};


if (arr[0] === '+'){
    testPlus();
};



