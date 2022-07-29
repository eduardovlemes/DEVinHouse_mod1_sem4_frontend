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



//Atividade em aula com alunos
class User{
    login;
    senha;
    dataNascimento;
    nome;
    
    constructor(login, senha, dataNascimento, nome){
       this.login = login;
       this.senha = senha;
       this.dataNascimento = dataNascimento;
       this.nome = nome;
    }
    cadastrar(){}
    editar(){}
    postar(){}
    inserirAvatar(){}
}
const usuario = new User("UserClamed", "clamed", "20/07/2022", "Clamedinho")