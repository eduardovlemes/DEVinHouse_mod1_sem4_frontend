class Series {
  nome;
  anoLancamento;
  qttTemporada;

  constructor(nome, anoLancamento, qttTemporada) {
    this.nome = nome;
    this.anoLancamento = anoLancamento;
    this.qttTemporada = qttTemporada;
  }
}


let maisAntiga;
let nomeAntigo;

for (let i = 0; i <= 3; i++) {
  let nome = prompt("digite o nome da série:");
  let anoLancamento = Number(prompt("digite o ano de lançamento da série:"));
  let qttTemporada = Number(
    prompt("digite a quantidade de temporadas da série:")
  );

  const serie = new Series(nome, anoLancamento, qttTemporada);
  if (i == 0) {
    maisAntiga = serie.anoLancamento;
  } else {
    if (serie.anoLancamento < maisAntiga) {
      maisAntiga = serie.anoLancamento;
      nomeAntigo = serie.nome;
    }
  }
}
console.log(maisAntiga);
console.log(nomeAntigo);
let tagH1 = document.getElementById("h1");
tagH1.innerHTML += nomeAntigo;
