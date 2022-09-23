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

let chisloObjekt1 = {

};


function goToGameOver()
{
  document.location.href = 'game_over.html';
};

function goToVictory()
{
  document.location.href = 'victory.html';
};


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


   const chisloObjekt = {
    randomInt: randomInt,    
    popytki: popytki,
    };

    return (chisloObjekt);  

}; //  vseFunkciiNaStranice()

/* ---------------------------------------------------------- */


// chisloObjekt1 - объект с информацией:
//  - загаданное число
//  - кол-во попыток



/*
let x = chisloObjekt1.chisloVvedennoe;
let y = chisloObjekt1.popytki;
let z = chisloObjekt1.randomInt;
*/

function noll(){
  document.getElementById("vvedennoeChislo").value = '';
  document.getElementById("numberPopytok").value = '';
  document.getElementById("numberA").value = '';
  document.getElementById("numberB").value = '';
};


function changeBodyBg(color){
  document.body.style.background = color;  
};

function changeFontcolor(color){  
  let testElem = document.getElementById('zagolovok');  
  testElem.style.color = color;
};

function changeFontSize() {
  let zagolovok = document.getElementById("zagolovok");
  zagolovok.style.fontSize = "55px";
};

function removeForma() {
  var elem = document.getElementById('forma');
  elem.parentNode.removeChild(elem);
  return false;
};



/*
function changeBodyCSS(){
  let bodyCSS = document.getElementsByTagName("body");
  bodyCSS.classList.add('./css/game_over.css')
  //console.log(bodyCSS);
};
  
*/

function photo() {
  var body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(http://localhost/background.png)';
  
  /*
  let cherep = document.getElementsByTagName('body')[0];    
  cherep.style.background = "black";
  //cherep.style.backgroundImage = "game_over_2.gif";
  //[0].style.backgroundImage = "blue"
  //console.log(cherep);
  //"./img/game_over_2.gif";  
};  



function gameOver() {
  document.getElementById("zagolovok").innerHTML='GAME ' + ' OVER ! ! !';
  removeForma(); 
  changeFontSize();
  changeFontcolor('red');
  changeBodyBg('black');

  photo();

  audio = new Audio(); // Создаём новый элемент Audio    
  audio.src = './sound/game_over.mp3'; // Путь к звуковому файлу
  audio.play();  
};

/* -------------------------------------------------------------*/



function victory() {
  let audio = new Audio(); // Создаём новый элемент Audio    
  audio.src = './sound/ljnn.mp3'; // Путь к звуковому файлу
  audio.play();
  changeFontSize();
  document.getElementById("zagolovok").innerHTML=' МОЛОДЕЦ ! ! !';
  changeBodyBg('green');
};


/* ---------------------- НАЧАЛО ПРОВЕРКИ------------------ */

/*
let a = document.getElementById("numberA").value; // ОТ
let b = document.getElementById("numberB").value; // ДО
let p = document.getElementById("numberPopytok").value; // кол-во попыток 
*/

function proverka(){
  
  a = document.getElementById("numberA").value; // ОТ
  b = document.getElementById("numberB").value; // ДО
  p = document.getElementById("numberPopytok").value; // кол-во попыток 

  a = Number(a);
  b = Number(b);
  p = Number(p);

/* ----------------------------------------------- */

if (a == b) {
  alert('Цифры не должны совпадать!');
};


if (a > 0 && b > 0) // для положительных
  {
    if (a < b) 
          {        
            d = (b - a) + 1;                  
            if (d <= p)
              { 
                d--;
                console.log("Количество попыток не должно быть больше " + `${d}` + " !");
              };
          }; 
    
    if (a > b) 
      { 
        d = (a - b) + 1;
        if (d <= p)
          {
           d--;
           console.log("Количество попыток не должно быть больше " + `${d}` + "!");
          };
      };  

  };  // для положительных
   

/* ----------------------------------------------- */

if (a < 0 && b > 0)
  {
    a = Math.abs(a);
    b = Number(b);
    p = Number(p);

    d = a + b + 1; 

    if (d <= p){
      d--;      
      console.log("Количество попыток не должно быть больше " + `${d}` + " !");
    };
  };

/* ----------------------------------------------- */

if (a > 0 && b < 0)
  {
    b = Math.abs(b);
    a = Number(a);
    p = Number(p);

    d = a + b + 1 ; 

  if (d <= p){
    d--;    
    console.log("Количество попыток не должно быть больше " + `${d}` + " !");
  };
};

//* ------------------------------------------- */



if (a == 0 || b == 0) // для НУЛЯ 
  {
    if (a < b) {
        d = (b - a);
          if (d <= p)
          { 
            d--;
            console.log("Количество попыток не должно быть больше " + `${d}` + " !");
          };

    } else if (a > b) 
          { 
            d = (a - b);            
              
              if (d <= p)
                {
                  d--;
                  console.log("Количество попыток не должно быть больше " + `${d}` + "!");
                };

          };  

  };  // для НУЛЯ

}; // function proverka()

/* ---------------------- КОНЕЦ ПРОВЕРКИ------------------ */



let q = 0;
// число для уменьшания кол-в попыток


function ugadat() {    
        
        x = chisloObjekt1.chisloVvedennoe;
        y = chisloObjekt1.popytki;
        z = chisloObjekt1.randomInt;

        if (x == z) {          
          noll();
          //victory();
          goToVictory();          
           } else if (x != z){

            q++;               
            y = y - q;

        if (y == 1) 
            {
               console.log('НЕ правильно!!! Осталась последняя попытка!');
            };  
                    
        if (y == 0) 
            {
              //noll();
              photo();
              gameOver();
              //changeBodyCSS();                                                     
              //goToGameOver();
            }; 
            

        let p = "Осталось "+ `${y}` + " попыт(ок)/(ка)/(ки)";

        if (z < x)  
            {
              console.log("Загаданное число меньше " + `${x}`);
              console.log(p);                                  
            }; 
              
        if (z > x) 
            {
              console.log("Загаданное число больше " + `${x}`);
              console.log(p);
            };   
                  
     }; // else

};
}; // конец проверки 