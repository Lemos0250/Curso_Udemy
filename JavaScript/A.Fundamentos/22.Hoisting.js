console.log('a =', a) //Undefined
var a = 2
console.log('a =', a) // 2

/////////////////////////////////////////////

function teste() {
console.log('a =', a) //Acontece a mesma coisa Dentro e Fora da Função
var a = 2
console.log('a =', a) 
}

console.log()

//O hoisting Lança as declarações de Variáveis Definidas com Var pra cima, porém sem o Valor que Depois seria Definido ficando Undefined.