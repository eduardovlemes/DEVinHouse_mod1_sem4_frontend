const array = [1,2,3,4]
const valorInicial = 0
const soma = array.reduce(
    function(valorAnterior, valorAtual) {
    return valorAnterior + valorAtual
    },
    valorInicial
);
  // 0 + 1 + 2 + 3 + 4
  console.log(soma);//10