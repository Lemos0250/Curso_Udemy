let Valor = false
console.log(Valor)
// Vai dar falso...
Valor =  true
console.log(Valor)
// Vai dar Verdadeiro...
Valor = 1
console.log(!!Valor)
// O Símbolo "!" significa negação e por "!!" Significa Negação da Negação ou seja o valor o que transforma o valor numérico em Booleano
console.log("\r"+"Os Verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!Infinity)
console.log(!!(Valor = true))
//Com excessão do 0 Todos os Números Inteiros são verdadeiros caso tenham o "!!"
console.log("\r" + "Os Falsos")
console.log(!!0) 
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(Valor = false))

console.log("\r" + 'Para Finalizar')
console.log(!!('' || null || 0 || 'epa' || 123 ))

let nome = ''
console.log(nome || "Desconhecido")