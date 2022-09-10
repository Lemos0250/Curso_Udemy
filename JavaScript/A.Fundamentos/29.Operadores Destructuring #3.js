function rand({min = 0, max = 100}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand({max: 50, min: 40})) //Código para um Número Aleatório Entre 50 (Máximo) e 40 (Minimo)
console.log(rand(obj))
console.log(rand({min: 242}))
//console,log(rand())