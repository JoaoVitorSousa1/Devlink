/*
Contains: verifica se uma determinada classe está presente na lista de classes de um elemento
Remove: remove uma ou mais classes de um elemento
Add: adiciona uma ou mais classes a um elemento
querySelector: seleciona elementos no DOM da página HTML e CSS
setAttribute: adiociona ou altera atributos em elementos HTML
_______________________________________________________________________________
_______________________________________________________________________________

1: pegar a tag img
2: se estiver no Light mode, adiciona avatar-light
3: se estiver sem o Light mode, manter avatar-dark
_______________________________________________________________________________
_______________________________________________________________________________
*/

function toggleMode(){
  const html = document.documentElement;
  const img = document.querySelector("#profile img") //1

  html.classList.toggle('light')
  if(html.classList.contains('light')){
  img.setAttribute('src', './assets/avatar-light.jpg') //2

  }else{
  img.setAttribute('src', './assets/img-2.jpg') //3
  }

}