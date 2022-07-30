class Pessoa {
  nome;
  idade;
  cpf;
  anoDeAniversario;

  constructor(nome, idade, cpf) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.anoDeAniversario = anoDeAniversario;
  }
  podeDirigir() {}
}

function podeDirigir() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let cpf = document.getElementById("cpf").value;
  let anoDeAniversario = document.getElementById("anoDeAniversario").valeu;
  if (idade >= 18) {
    return true;
  } else {
    false;
  }
  const Pessoa = new Pessoa(nome, idade, cpf, anoDeAniversario);
  document.write(Pessoa);
}
