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


/*

function goToGameOver()
{
  document.location.href = 'game_over.html';
};

function goToVictory()
{
  document.location.href = 'victory.html';
};

*/

/* --------------------------------------------

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

document.body.append(div);

/* -------------------------------------------- */

let chisloObjekt1 = {

};

function newGame(){
      //document.location.href = 'number.html';
    let div = document.createElement('div');
    /* укажем класс стилей и содержимое:  */
    div.className = "new_game";
    div.innerHTML = '<a href="number.html">попробовать ещё раз...</a>'; 
    document.body.append(div); //добавим наш div в раздел body
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

function changeFontColor(color){  
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

// GIF-ку на струницу поставить (показать скрытый блок с ней)
function imgGameOver() {
  document.getElementById('cherep').style = "display: block";
};

function imgVictory() {
  document.getElementById('hands').style = "display: block";
};

function gameOverChangeTitle() {
  document.getElementById("zagolovok").innerHTML='GAME ' + ' OVER ! ! !';
};


function gameOver() {
  document.getElementById("zagolovok").innerHTML='GAME ' + ' OVER ! ! !';             
  
  changeFontSize();
  changeFontColor('red');
  changeBodyBg('black');       
  removeForma();
  imgGameOver();

  audio = new Audio(); // Создаём новый элемент Audio    
  audio.src = './sound/game_over.mp3'; // Путь к звуковому файлу
  audio.play();

  newGame();
};

/* -------------------------------------------------------------*/



function victory() {
  document.getElementById("zagolovok").innerHTML='М О Л О Д Е Ц   ! ! !';
     
  changeFontSize();
  changeFontColor('white');
  changeBodyBg('rgb(11, 224, 11)');
  removeForma();
  imgVictory();

  audio = new Audio(); // Создаём новый элемент Audio    
  audio.src = './sound/victory.mp3'; // Путь к звуковому файлу
  audio.play();  

  newGame();
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

if (p < 1){
  alert('Минимальное количество попыток - одна !');
  console.log(p);
};

if (a == b) {
  alert('Цифры не должны совпадать!');
};


if (a > 0 && b > 0) // для положительных
  {   
  
    if (a < b) {
        
        d = (b - a) + 1;
                  
        if (d <= p)
        { 
          d--;
          alert("Количество попыток не должно быть больше " + `${d}` + " !");
        };

    } else if (a > b) 
          { 

            d = (a - b) + 1;            

            if (d <= p)
              {
                d--;
                alert("Количество попыток не должно быть больше " + `${d}` + "!");
              };

          };  

  };  // для положительных
   

/* ----------------------------------------------- */

if (a < 0 && b > 0){

    a = Math.abs(a);

    b = Number(b);

    p = Number(p);

    d = a + b + 1; 

    if (d <= p){
      d--;      
      alert("Количество попыток не должно быть больше " + `${d}` + " !");
    };
  };

/* ----------------------------------------------- */

if (a > 0 && b < 0){

  b = Math.abs(b);

  a = Number(a);

  p = Number(p);

  d = a + b + 1 ; 

  if (d <= p){
    d--;    
    alert("Количество попыток не должно быть больше " + `${d}` + " !");
  };
};

//* ------------------------------------------- */

// для НУЛЯ

if (a == 0 || b == 0) 
  {   
  
    if (a < b) {
        
        d = (b - a);
                  
        if (d <= p)
        { 
          d--;
          alert("Количество попыток не должно быть больше " + `${d}` + " !");
        };

    } else if (a > b) 
          { 

            d = (a - b);            

            if (d <= p)
              {
                d--;
                alert("Количество попыток не должно быть больше " + `${d}` + "!");
              };

          };  

  };  
  
  // для НУЛЯ

 
};

/* ---------------------- КОНЕЦ ПРОВЕРКИ------------------ */



let q = 0;
// число для уменьшения кол-в попыток


function ugadat() {    
        
        x = chisloObjekt1.chisloVvedennoe; // введённое число
        y = chisloObjekt1.popytki;         // кол-во попыток
        z = chisloObjekt1.randomInt;       // загаданное число        

        console.log(x);

        if (x == z) {          
          
          victory();
                  
           } else if (x != z){            

              q++;               
              y = y - q;

              for (;y == 0;){
                gameOver(); 
              };

            let r = "Загаданное число меньше " + `${x}` + ". ";
            let s = "Загаданное число больше " + `${x}` + ". ";
            let p = "      Осталось попыток: " + `${y}`;

            for (;y == 1;) {
            //  alert('НЕ правильно!!! Осталась последняя попытка!');

              if (z < x)  
                  {
                    //alert(r + p);
                    alert('НЕ правильно!!! Осталась последняя попытка!  ' + r);              
                  }; 
                    
              if (z > x) 
                  {
                    //alert(s + p);
                    alert('НЕ правильно!!! Осталась последняя попытка!  ' + s);              
                  };

              break;               

            };
            
            if (y != 1){

              if (z < x)  
                  {
                    alert(r + p);              
                  }; 
                    
              if (z > x) 
                  {
                    alert(s + p);              
                  };  
            }
                        
          }; // else

}; // function ugadat()        
    


               
  