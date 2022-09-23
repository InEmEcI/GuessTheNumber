/* --------------------------------------------

function getValueAalert(){
    let number = document.getElementById("numberA").value;
    alert (number)
  };

function getValueBalert(){
    let number = document.getElementById("numberB").value;
    alert (number)
  };

  

-----------------------------------------------------------  */


function vseFunkciiNaStranice() {

    function getValueA() {
      let number = document.getElementById("numberA").value;
      return (number);
    };
  
    let minA = getValueA(); // число ОТ

    function getValueB() {
      let number = document.getElementById("numberB").value;
      return (number);
    };
  
    let maxB = getValueB(); // число ДО
  
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return (Math.floor(Math.random() * (max - min + 1)) + min);
    };
  
    const randomInt = getRandomInt(minA, maxB);
    // randomInt - рандомное число между минимальным и максимальным среди введённых */
    
    function getValueP() {
      let number = document.getElementById("numberPopytok").value;
      return (number);
    };
  
    let popytki = getValueP();
    /* popytki - количество введённых попыток */
    
   
   function chislo(){
      let number = document.getElementById("vvedennoeChislo").value;
    return (number);
    };
  
    let chisloTry = chislo();   
    // chisloTry - введённое число 

    const chisloObjektVnutriFunkcii = {
      a: randomInt,
      b: chisloTry,
    }; 

    console.log (`Объект ВНУТРИ функуии:`)
    console.log(chisloObjektVnutriFunkcii); 


   const chisloObjekt = {
    randomInt: randomInt,
   // chisloTry: chisloTry,
    popytki: popytki,
    };
    console.log (`Объект №1`)
    console.log (chisloObjekt);



    chisloObjekt.chisloTry = chisloTry;
    console.log (`Объект №2`)
  console.log (chisloObjekt);

    return (chisloObjekt);
  
  };

/* ---------------------------------------------------------- */
     
/*chisloObjekt1 = {}; */

chisloObjekt1 = vseFunkciiNaStranice();
console.log (`Объект ПОСЛЕ функуии:`)
console.log(chisloObjekt1); 

/* let a = chisloObjekt1.randomInt;
console.log(chisloObjekt1.randomInt);



let b = chisloObjekt1.chisloTry;
console.log(b);

let c = chisloObjekt1.popytki;
console.log(c);

/*

if (chisloTry == randomInt){
    alert(`ПРАВИЛЬНО!!!`)
} else if (chisloTry != randomInt){
    alert(`НЕ правильно!!!`);
    popytki = popytki-1;
    console.log(popytki);
}

*/






