var videogame = ['Xbox 360', 'Xbox One', 'Playstation 3', 'Playstation 4', 'Nintendo Wii'];

console.log(videogame[3]); // retorna Playstation 4

for (let num = 0; num < 10; num++) {
  console.log(num);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++
}

for (let num = 0; num <= 4; num++) {
  console.log(videogame[num]);
}

//////////////

var videogames = [
  'Playstation 2',
  'Playstation 3',
  'Playstation 4',
  'Playstation 5',
  'Xbox 360',
  'Xbox One',
  'Xbox One X',
  'Xbox One S',
  'Xbox One Series X'
];

for (var item = 0; item < videogames.length; item++) {
  console.log(videogames[item]);
  document.write(videogames[item] + "<br>");
  if (videogames[item] === 'Xbox One') {
    break;
  }
}

videogames.forEach(function (item, index) {
  console.log('///');
  console.log(item, index);
});

// Exercícios

// Criar uma Array com os anos que o Brasil ganhou a copa

var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

for (var i = 0; i < brasilCampeao.length; i++) {
  console.log(`O Brasl foi campeão em ${brasilCampeao[i]}`);
}

/// Interagir com um loop de frutas e parar quando chegar em Pera

var frutas = ['Maçã', 'Banana', 'Uva', 'Pera', 'Melancia'];

for (fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);
  if (frutas[fruta] === 'Pera') {
    break;
  }
}

// Retornar o último item da array acima

// var ultimaFruta = frutas.pop();          // esse comando, apesar de mostrar, também remove e não é o que eu quero.
var ultimaFruta = frutas[frutas.length - 1];