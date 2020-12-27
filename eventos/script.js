const img = document.querySelector('img');

function callback() {
  console.log('Clicou');
}

//img.addEventListener('click', callback);

//

const imagensLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.target);
  console.log(event.type);
}

imagensLista.addEventListener('click', callbackLista);

console.log(imagensLista);