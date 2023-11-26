const lista = [7, 5, 6, 9786546, 12312, 1216547, 1, 2, 3, 4]
const par = []
const impar = []

function clasificar (indice) {
    if(indice % 2 === 0){
        par.push(indice)
    }
    else{
        impar.push(indice)
    }
}


// lista.forEach(clasificar)
lista.forEach(function (indice) {
    if(indice % 2 === 0){
        par.push(indice)
    }
    else{
        impar.push(indice)
    }
})

console.log(par)
console.log(impar)

const par2 = lista.filter(function(indice){
    if(indice % 2 === 0){
        return indice
    }
})

const impar2 = lista.map(function(indice){
    if(indice % 2 !== 0){
        return indice
    }
    else {
        return 'par'
    }
})
console.table(impar2)