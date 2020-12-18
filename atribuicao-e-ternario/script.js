var numero = 20;
var numero2 = 30;

numero += numero2; // = numero = numero + numero

var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber);

var possuiCarro = true;
var possuiCasa = true;

var darCredito = possuiCarro && possuiCasa ? "Dar credito" : "Não dar credito";;
console.log(darCredito);

/////////

{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  console.log(cor, marca, portas);
}

