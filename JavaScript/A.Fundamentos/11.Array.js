const valores = [7.6, 7.8, 5.4, 4.8]
//Array Declarado de forma literal e com quatro posições separados por uma vírgual, como uma estrutura de valor indexado o valor do Array começa pelo 0
console.log(valores[0], valores[3])
console.log("\r" + valores[4])
//irá dar Undefined e não erro
valores[4] = 11.0
console.log(valores)

valores[10] = 12.0
console.log("\r" + valores)
//Vai pular os valores nulos e dará apenas o de número "10"
console.log(valores.length)
//vai dizer a quantidade de Valores dentro de um Array
valores.push({id: 3}, false, null, 'Teste')
console.log(valores)

console.log(valores.pop())
//Vai pegar o ultimo valor do Array e retornar-lo
delete valores[0]
console.log(valores)
//Vai deletar o ultimo valor do Array
console.log(typeof valores)
//Arrays são do Tipo Object
