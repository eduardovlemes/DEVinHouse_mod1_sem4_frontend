class Pessoa{
    nome;
    idade;
    cpf;

    constructor(nome,idade,cpf){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
    }
}

const alunoSenai = new Pessoa ("fernando", 24, "000.000.000-00")
console.log(alunoSenai)