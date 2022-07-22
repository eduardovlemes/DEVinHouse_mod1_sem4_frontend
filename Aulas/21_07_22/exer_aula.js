var names = ["Ben","Carol", "Iane", "Jafar", "Matt", "Priya", "Brian", "Guilherme", "Bruna"]
var nomesComB = []

names.forEach(function (item){
    if (item[0] == "B") {
        nomesComB.push(item)
    }     
})
console.log(nomesComB)