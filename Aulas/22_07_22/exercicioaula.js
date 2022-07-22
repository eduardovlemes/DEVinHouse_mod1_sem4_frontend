const array = [1,22,31,40,3,5]
let maiorValor = array.reduce(function(valorAnterior, valorAtual) {
        if (valorAtual > valorAnterior){
            valorAnterior = valorAtual
        }
    return valorAnterior
    }, 0 //Esse zero serve para informar o valor incial, pois se não for definido será undefined.
);
  console.log(maiorValor)