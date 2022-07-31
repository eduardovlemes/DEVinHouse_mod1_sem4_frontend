//CLASSES
//Uma classe possui caracteristicas e ações de qualquer objeto do cotidiano
class Endereco {
    rua;
    cep;
    numero;
    bairro;
  
    validaCEP() {}
  }
  
  //Outros exemplos
  class Empresa {
    telefone;
    cnpj;
    dono;
    nome;
    localidade;
  }
  
  //Validador de acesso dos atributos de uma classe
  class Pessoa {
    nome;
    idade;
    #cnh;
    #cpf;
  
    //construtor para iniciar valores assim que se instância uma classe
    constructor(nome, idade, cnh) {
      this.nome = nome;
      this.idade = idade;
      this.#cnh = cnh;
    }
  
    //Métodos getters para capturar o atributo privado
    get cpf() {
      return this.#cpf;
    }
    get cnh() {
      return this.#cnh;
    }
  
    //Métodos setters para iniciar um atributo privado
    set cpf(cepefe) {
      this.#cpf = cepefe;
    }
    set cnh(cnh) {
      this.#cnh = cnh;
    }
  }
  //Instância da classe Pessoa vazia
  const alunoCurso = new Pessoa();
  //Instância da classe Pessoa com valores iniciais atravez do constructor
  const alunoSenai = new Pessoa("Fernando", 24, "123456789");
  
  //Se remover os atributos getters ou setters isso não seria possível pois os atributos cnh e cpf são privados
  alunoCurso.cnh = "wefef-243";
  alunoCurso.cpf = "123456789";
  console.log(alunoCurso.cpf);
  console.log(alunoCurso.cnh);
  
  //atributos publicos
  alunoCurso.nome = "Jonas";
  alunoCurso.idade = 12;
  
  //===============================================================
  // exemplo no dia a dia
  class Funcionario {
    nome;
    idade;
    cpf;
    cargo;
  
    constructor(nome, idade, cpf, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cpf = cpf;
      this.cargo = cargo;
    }
  }
  
  function enviaDados() {
    //Faço a captura dos inputs
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cpf = document.getElementById("cpf").value;
    let cargo = document.getElementById("cargo").value;
  
    //Instancio a classe com esses inputs
    const funcionario = new Funcionario(nome, idade, cpf, cargo);
    console.log(funcionario); //Observe o retorno
  }
  
  //INDEXOF
  let array = [
    {
      nome: "Rayane",
      sobrenome: "Cristina",
      idade: 21,
    },
    {
      nome: "Carlos",
      sobrenome: "Henrique",
      idade: 17,
    },
    {
      nome: "Julio",
      sobrenome: "Cesar",
      idade: 19,
    },
    {
      nome: "Camila",
      sobrenome: "Fernandes",
      idade: 18,
    },
    {
      nome: "Julia",
      sobrenome: "Fernandes",
      idade: 10,
    },
    {
      nome: "Bruno",
      sobrenome: "Albuquerque",
      idade: 31,
    },
    {
      nome: "Túlio",
      sobrenome: "Bastos",
      idade: 22,
    },
    {
      nome: "Cristiane",
      sobrenome: "Maria",
      idade: 41,
    },
  ];
  let array2 = [12, 13, 35, 57, 66];
  // não é possível pois cada objeto possui sua propria referência
  let indice = array.indexOf({ login: "ray123", senha: "kujhefadksujf" });
  console.log(indice);
  
  //CONCAT
  //Junta arrays
  console.log(array2.concat(array));

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
let arrays = [
    {
        login: "edu",
        senha: "edu123",
    },
    {
        login: "mil",
        senha: "mil123",
    }
]

let array2s = [22,33,44,55,66,77]

console.log(array2.concat(array)) /// serve para juntar arrays