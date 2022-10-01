# Здесь находится рабочая версяя программы от 27_09_2022

# 28_09_22
## нужно сделать чтоб к создаваемому div добавилась функция перезагрузки страницы

# 01_10_22
## вот эта функция. работает
// создаёт кнопку для перезагрузки страницы с текстом и классом
function newGame(){
  let myButton = document.createElement('button')
  myButton.className = "new_game";    
  myButton.innerHTML = "попробовать ещё раз..."
  document.body.append(myButton)
  myButton.addEventListener("click", () => document.location.reload())
}
