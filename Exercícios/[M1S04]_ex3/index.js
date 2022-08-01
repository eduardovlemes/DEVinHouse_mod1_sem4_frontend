class Pessoa {
  nome;
  idade;
  cpf;
  anoDeAniversario;
  
  podeDirigir() {
    idade >= 18 ? "true" : "false"
  } 
}
const usuario = new Pessoa()
usuario.nome = "clamed"
usuario.idade = "102"
usuario.cpf = "000.000.000-00"
usuario.anoDeAniversario = "1920"

console.log(usuario)