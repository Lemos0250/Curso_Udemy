const altura_1 = 1.84
const altura_2 = Number('1.93')

console.log("Altura de João: " + altura_1 + "\r" + "Altura de Bonnet: " + altura_2)
console.log("\r" + Number.isInteger(altura_1))
console.log(Number.isInteger(altura_2))

const altura_3 = 1.80
const altura_4 = 1.74

console.log("\r" + "Altura de Radas: " + altura_3 + "\r" + "Altura de Talmon: " + altura_4)

const total = altura_1 + altura_2 + altura_3 + altura_4
const media = total / 4

console.log("\r" +"A altura total é de: " + total.toFixed(2) + "\r" + "A altura média dos quatro amigos é: " + media.toFixed(2))
console.log( "\r" + typeof media)
//o "to.fix" serve para que na hora de sair o resultado apenas saiam as casas decimais propostas pelo programador

//Converter em String console.log(media.toString(*)), para converter em em binario console.log(media.toString(2))

//Sim Bonnet esté Código foi um EasterEgg