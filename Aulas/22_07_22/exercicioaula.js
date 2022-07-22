const array = [1,22,31,40,3,5]
let valorInicial = 0
let maiorValor = array.reduce(
    function(valorAnterior, valorAtual) {
        if (valorAtual > valorAnterior){
            valorAnterior = valorAtual
        }
    return valorAnterior
    },
);
  console.log(maiorValor)