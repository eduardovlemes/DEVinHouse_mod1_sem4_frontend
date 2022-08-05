/* Crie um código javascript para verificar se todos os alunos do array de objetos arrayAlunos abaixo estão acima da média que será 7. Se o retorno for verdadeiro imprima em tela "Parabéns a todos da turma", porem se não for imprima em uma lista html todos os alunos que ficaram na "recuperação". */

let arrayAlunos = [
  { nome: "Carlos", media: 10,},
  { nome: "Julia",  media: 8,},
  { nome: "Rayane", media: 6,},
  { nome: "Arthur", media: 5,},
]
let alunosReprovados = [];
let alunosAprovados = [];
let mediaParaAprovacao = 7;

arrayAlunos.forEach(function (atributoDoArray) {
    if (atributoDoArray.media >= mediaParaAprovacao) {
        alunosAprovados.push(atributoDoArray)
    } else {
        alunosReprovados.push(atributoDoArray)
    }
})

if (alunosAprovados.length == arrayAlunos.length) {
    document.write("<h2>Parabéns a todos da turma!</h2>")  
} else {
    document.write(`<h2>Aluno(s) reprovado(s): \n\n <br></h2>`)
    alunosReprovados.forEach(atributoDoArray => {
        document.write(`nome: ${atributoDoArray.nome} |  media: ${atributoDoArray.media}<br>`)
    })
}