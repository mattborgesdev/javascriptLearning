function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(4));

function pi() {
  return 3.14;
}

console.log(pi());

conta = 3 * pi();
console.log(conta);

// FIM


function corFavorita(cor) {
  var casa;
  if (cor === 'Azul' || cor === 'azul') {
    casa = 'Corvinal';
    return `Sua casa é a ${casa}`;
  } else if (cor === 'Verde' || cor === 'verde') {
    casa = 'Sonserina';
    return `Sua casa é a ${casa}`;
  } else if (cor === 'Amarelo' || cor === 'amarelo') {
    casa = 'Lufa-Lufa';
    return `Sua casa é a ${casa}`;
  } else if (cor === 'Vermelho' || cor === 'vermelho') {
    casa = 'Grifinória';
    return `Sua casa é a ${casa}`;
  } else {
    return 'Valor inválido, tente novamente.';
  }
}

console.log(corFavorita('Verde'))

// FIM

function mostraConsole() {
  console.log('Olá!');
}

addEventListener('click', mostraConsole);

// Calculo de IMC com dois tipos de Funções:
// 1:

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(50, 1.67));

// 2:

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(50, 1.67);

console.log(imc2(80, 1.97)); // undefined

// FIM

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Por favor, entre com um número';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
// Não é uma boa prática retornar diferentes tipos de valores. Nesse caso tem string e boolean.
console.log(terceiraIdade(59));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  var total = totalPaises - paisesVisitados;
  return `Faltam visitar ${total} países`;
}