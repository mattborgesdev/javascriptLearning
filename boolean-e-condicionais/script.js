var possuiGraduacao = true;
var x;

if (possuiGraduacao) {
  x = 10;
  console.log("É verdadeiro!");
} else {
  console.log("É falso!");
}

console.log(x); // Se eu criasse a variável X com let dentro da estrutura condicional ele não seria mostrado no console. Seria "temporária".

var possuiDoutorado = false;

if (possuiDoutorado) {
  console.log("Possui Doutorado!");
} else if (possuiGraduacao) {
  console.log("Possui Graduação!");
} else {
  console.log("Não possui Graduação!");
}

if (!!possuiGraduacao) {
  console.log("Não possui Graduação!");
}

if (!false) { // Estranhamente isso não funciona com "!true"
  console.log("Falsiane");
}

var x = '10';
console.log(x == 10);

var y = 'Gatos';
console.log(y !== 'Gato');

// FIM

console.log('Gato' && 'Cão');
console.log('Cão' && 'Gato');
console.log((5 - 5) && (5 + 5)); // Vai dar false pois na primeira operação o resultado é 0
console.log((5 + 5) && (5 - 5)); // Novamente 0, pois resultado 0 = false
console.log((5 >= 5) && (3 < 6));

// FIM

var corFavorita = 'Verde';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol');
    break;
  case 'Verde':
    console.log('Olhe para a floresta');
    break;
  default:
    console.log('Feche os olhos');
}

// Exercícios

var minhaIdade = 22;
var idadeIrma = 12;

if (minhaIdade > idadeIrma) {
  console.log('É maior!');
} else if (minhaIdade === idadeIrma) {
  console.log('É igual!');
} else {
  console.log('É menor!');
}

var espaçoVazio = ' ';
console.log(typeof espacoVazio);
