const a = {nome: 'Olá Mundo'}
console.log(a)
const b = a
b.nome = "Opa"
console.log(a)
//Isso é uma Atribuição por Referência
let c = 3
let d = c
d++
console.log(d)
console.log(c)
//incrementa uma unidade a variável d, isso acontece por queisso é uma cópia por valor mas não necessariamente o d e c são iguais 
let valor //Não inicializada
console.log(valor) // Undefined
//console.log(valor2) Not Defined

valor = null //Não está em nenhum endereço de memória, por mais que ela possa ser definida
console.log(valor)
//console.log(valor.toString()) Não tem valor para nulo

const produto = {}
console.log(produto)

produto.preco = 10
console.log(produto)

produto.preco = undefined //Não atribua Undefined
console.log(!!produto.preco) // Como já vimos undefined após o !! da False

produto.preco = null // Null é adequado para algo sem valor
console.log(!!produto.preco)
