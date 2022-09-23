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

  function getValueA() {
    let number = document.getElementById("numberB").value;
    return (number);
  };

  let maxB = getValueB(); // число ДО

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  };

  let randomInt = getRandomInt(minA, maxB);
  // randomInt - рандомное число между минимальным и максимальным среди введённых */
  function getValueP() {
    let number = document.getElementById("numberPopytok").value;
    return (number);
  };

  let popytki = getValueP();
  /* popytki - количество введённых попыток */
  function chislo() {
    let number = document.getElementById("vvedennoeChislo").value;
    return (number);
  };

  let chisloTry = chislo();
  // chisloTry - введённое число*/
  let chisloObjekt = {
    randomInt: randomInt,
    chisloTry: chisloTry,
    popytki: popytki,
  };

  return (chisloObjekt);

}
