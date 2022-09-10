console.log(typeof Object)
//Object é uma Função
class Produto {}
//console.log(typeo Produto)

function imprimirMultiplicação(num1, num2) {
    console.log(num1 * num2)
} //Em função não se usa let ou const devido ao JavaScript ser uma Linguagem Fracamente Tipada.
imprimirMultiplicação(6, 5)
imprimirMultiplicação(2) // Vai Somar o Primeiro Valor com um valor Undefied
imprimirMultiplicação(5, 10, 1000, 10000, 1000000) //Vai somar apenas os 2 Valores e Ignorar o Resto

function Multiplicação(num1, num2 = 0) {
    return num1 * num2
}
console.log(Multiplicação(2, 4))
console.log(Multiplicação(2))

//Armazenando uma Função/Constante em uma variável 
const imprimirsoma = function (num3, num4) {
    console.log(num3, num4)
}
imprimirsoma(7, 10)
//Armazenando uma função Arrow em uma Variável
const soma = (num3, num4) => {
    return num3 + num4
}

console.log(soma(7, 10))

//Retorno Implícito
const subtracao = ( num3, num4) => num3 - num4

const imprimir2 = num3 => console.log(num3)
imprimir2("Legal !!!")