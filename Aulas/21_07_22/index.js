// Exemplo de ForEach em um array
/* let jogos = [
    "Valorant",
    "Pacman",
    "Super Mário",
    "CS",
    "FIFA",
    "The last of us",
    "Lol",
    "GTA",
    "minacraft"
]
jogos.forEach(function (item, indice){
    debugger
    document.write("<h3> Item:" + item + "</h3>")
    document.write("<h3> Item:" + indice + "</h3>")
}); */

//Exemplo de ForEach em um array de Objetos
/* let jogos = [
    {
        nome: "Valorant",
        modo: "fps"
    }
    {
        nome: "pacman",
        modo: "antigo"
    }
]
let arrayB = []
jogos.
jogos.forEach(function (item, indice){
    debugger
    arrayDeB.push(item)
    document.write("<h3> Item:" + item.nome[0] + "</h3>") // ao colocar o produto que tu irá acessar dentro do objeto
    document.write("<h3> Item:" + indice + "</h3>")
}); */

//// Filter
let array = [
    {
      nome: "Rayane",
      sobrenome: "Cristina",
      idade: 21
    },
    {
      nome: "Carlos",
      sobrenome: "Henrique",
      idade: 17
    },
    {
      nome: "Julio",
      sobrenome: "Cesar",
      idade: 19
    },
    {
      nome: "Camila",
      sobrenome: "Fernandes",
      idade: 18
    },
    {
        nome: "Julia",
        sobrenome: "Fernandes",
        idade: 10
      },
      {
        nome: "Bruno",
        sobrenome: "Albuquerque",
        idade: 31
      },
      {
        nome: "Túlio",
        sobrenome: "Bastos",
        idade: 22
      },
      {
        nome: "Cristiane",
        sobrenome: "Maria",
        idade: 41
      },
]
let idadeMaiorDeDezoito = array.filter(function(item){ return item.idade >= 18});
//console.log(idadeMaiorDeDezoito)

///FIND
const nomeESobrenome = idadeMaiorDeDezoito.find(function(item) {return item.idade > 30});
document.write("<h1>" + "idadeMaiorDeDezoito.nome" + "idadeMaiorDeDezoito.sobrenome"+ "</h1>")

//MAP
let novoSobrenome = array.map(function(item){item.sobrenome = "Silva"})
console.log(novoSobrenome)