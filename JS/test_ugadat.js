
let x = 3; // введённое
let y = 10; // попытки   
let z = 1; // придуманное

/*
  y = chisloObjekt1.popytki;
  x = chisloObjekt1.chisloVvedennoe;          
  z = chisloObjekt1.randomInt;
*/

let q = 1;

function ugadat() {            
     
     if (x == z) {
        console.log(' П Р А В И Л Ь Н О  !  !  !');              
         };

    for (;y > 1;){
          y = y - q;
          q++;
          console.log('НЕ правильно!!!  Осталось');                  
          console.log(y);
          console.log('попыток');  
        };

    for (;y == 0 && y == 1;){

              if (y = 1){
                console.log('Осталась последняя попытка!');
              }

              if (y == 0) break;
                 console.log('GAME OVER !!!'); 

              };    
                 
   };

            
 
ugadat();