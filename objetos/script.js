var pessoa = {
  nome: 'Matheus',
  idade: 22,
  profissao: 'Técnico de TI',
  possuiFaculdade: false,
}

pessoa.npme;
pessoa.idade;
console.log(typeof pessoa);

console.log(`Seu nome é ${pessoa.nome}, você possui ${pessoa.idade} anos e sua profissão é ${pessoa.profissao}.`);

// Métodos:

/*
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado ** 2;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
}
*/

var quadrado = {
  lados: 4,
  area(lado) { // Esse tipo de função abreviada, ou seja,, sem escrever "function", é uma atualização do ES6;
    return lado ** 2;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

// FIM

var pi = Math.PI;
var random = Math.random();

console.log(pi);
console.log(random);

// FIM

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
menu.color = 'blue';
var bg = menu.backgroundColor;

var height = 120;
var menu2 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
}

menu2.metadeHeight(); // Testando isso no console o resultado vai ser 25. Seria 60 se não tivesse usado "this".