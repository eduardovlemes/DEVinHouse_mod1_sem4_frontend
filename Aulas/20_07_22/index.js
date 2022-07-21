// // Encapsulamento

// class Pessoa{
//     nome;
//     idade;
//     #cpf; /// O hashtag indica que elemento da classe é privado

//     constructor(nome,idade,cpf){
//         this.nome = nome
//         this.idade = idade
//         this.#cpf = cpf
//     }

//     get cpf () {
//         return this.#cpf
//     }

//     set #cpf (cpf){ /// Observe que o "set" precisa receber um valor dentro do parênteses, e esse valor vai ser usado no "get"
//         this.#cpf = cpf
//     } 
// }

// const alunoSenai = new Pessoa ()
// alunoSenai.nome = "edu"
// alunoSenai.idade = 20
// alunoSenai.#cpf = "000.000.000-00"

// console.log(alunoSenai)


// 
class Funcionario {
    nome;
    idade;
    cpf;
    cargo;

    constructor(nome,idade,cpf,cargo){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf
        this.cargo = cargo
    }
}

function enviaDados (){
    let nome = document.getElementById("nome").value
    let idade = document.getElementById("idade").value
    let cpf = document.getElementById("cpf").value
    let cargo = document.getElementById("cargo").value

    console.log(nome)
    console.log(idade)
    console.log(cpf)
    console.log(cargo)


    const Funcionario = new Funcionario(nome,idade,cpf,cargo)
    console.log(Funcionario)
}



 // Um exemplo de array de objetos
let array = [
    {
        login: "edu",
        senha: "edu123",
    },
    {
        login: "mil",
        senha: "mil123",
    }
]

let array2 = [22,33,44,55,66,77]

console.log(array2.concat(array)) /// serve para juntar arrays