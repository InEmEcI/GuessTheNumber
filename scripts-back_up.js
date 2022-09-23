/* console.log(`Предложение в подключённом ПЕРЕМЕЩЁННОМ файле`);
console.log(`100`);
console.log(100);
console.log(`СРАВНЕНИЯ:`);
console.log(`Цифры`);
console.log(`100<101`);
console.log(100<101);

console.log(`Присвоение - "=" `);
console.log(`Нестрогое - "==" `);
console.log(`Строгое - "===" `);*/

// Условия

/* -------------------------------------------- *
const time = 1;

console.log(`Время ` + time + ` ч.`);

if(time >= 6 && time < 12){
    console.log(`Доброе утро!`)
} 

else if (time >= 12 && time < 18)
    {console.log(`Добрый день!`)}

else if(time >=18 && time <= 23)
    {console.log(`Добрый вечер!`)}

else if(time >=0 && time < 6)
    {console.log(`Доброй ночи!`)}

else if(time == 24)
    {console.log(`Доброй ночи!`)}    

/* -----------ОБЪЕКТЫ-------------------------- 

const objectA = {
    a: 10,
    b: true        
}

const copyOfA = objectA;


const passport = {
    imya: 'Илья',
    otchestvo: `Игоревич`,    
    familiya: `Карнюхинn`,
    godRojdeniya: 1983    
    }
    
    console.log(passport)
    

/* -------------------------------------------- */



/* -------------------------------------------- 

const a = 2;
const b = 3;
const myCity = {
    city: `Пушкино`,
    cityGreeting () {console.log(`Аплодиспенты!!!`)}
}

console.log(myCity.cityGreeting)

// -------------------------------------------- 


const post = {
    title: `My post`,
    postsNumber: 5
}


/* -------------------------------------------- 


function printMyName() {
    console.log(`Тебя зовут НАТАША!`)
}

function print3() {
    console.log(`3`)
}

function print2() {
    console.log(`2`)
}

function print1() {
    console.log(`1`)
}

console.log(`СТАРТ`)
setTimeout(print3, 1000)
setTimeout(print2, 2000)
setTimeout(print1, 3000)
setTimeout(printMyName, 4000)

/* -------------------------------------------- 

const a = `151!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`

//console.log(a)

function myFn(){
         function innerFn(){
             console.log(a)
        }
        innerFn()
    }

myFn()
/* -------------------------------------------- */

function getValueAalert(){
    let number = document.getElementById("numberA").value;
    alert (number)
  }

function getValueBalert(){
    let number = document.getElementById("numberB").value;
    alert (number)
  };



/* ----------------------------------------------------------- */

function vseFunkciiNaStranice(){

   function getValueA(){
        let number = document.getElementById("numberA").value;
        return (number)
      };
    
    let minA = getValueA();  // число ОТ

    function getValueB(){
        let number = document.getElementById("numberB").value;
        return (number)
      };    

    let maxB = getValueB(); // число ДО

   function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return (Math.floor(Math.random() * (max - min + 1)) + min)
    };

    let randomInt = getRandomInt(minA, maxB);
    /* randomInt - рандомное число между минимальным и максимальным среди введённых */
    
    function getValueP(){
        let number = document.getElementById("numberPopytok").value;
        return (number);
      };
    
    let popytki = getValueP();
    /* popytki - количество введённых попыток */

    
  function chislo(){
    let number = document.getElementById("vvedennoeChislo").value;
    return (number)
  };
  let chisloTry = chislo();
 /* chislo - введённое число*/






if (chisloTry == randomInt){
    alert(`ПРАВИЛЬНО!!!`)
} else if (chisloTry != randomInt){
    alert(`НЕ правильно!!!`);
    popytki = popytki-1;
    console.log(popytki);
}

 /* ------------------------------------- */
 /* do {
    if (chisloTry == randomInt){
       alert(`ПРАВИЛЬНО!!!`)
   }

   else if(chisloTry != randomInt){
       alert(`НЕ правильно!!!`);
       popytki = popytki-1;
       if(popytki == 0) alert(`Попытки кончились!`);        
   }
 } while (popytki != 0); */

 /* ----------------------------------------------------- */



} // vseFunkciiNaStranice()


/*-----------------------------------------------------------

if (vvedennoeChislo = 0){
    console.log(`П Р А В И Л Ь Н О  ! ! !`)
}

while (popytki != 0){
    if (vvedennoeChislo == randomInt){
        alert(`П Р А В И Л Ь Н О  ! ! !`)
    }
        else if(vvedennoeChislo != randomInt){
            alert(`НЕ ПРАВИЛЬНО ! ! !`);
            vvedennoeChislo--;
            alert(`Осталось __ попыток!`);
        }
    }         

/*else (popytki != 0){
    alert(`ПОПЫТКИ ЗАКОНЧИЛИСЬ ! ! !`)
} */
   
 











