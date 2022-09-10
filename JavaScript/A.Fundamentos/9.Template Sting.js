const nome = 'Camila'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!
`
//Esse Template String Permite a Utilização de Duas ou mais linhas Linhas sendo usado por meio da interpolação ${*****}
console.log(concatenacao, template)

//Dentro do Tamplate String também é possível por Expressões Matemáticas, 
console.log(`1 + 1 = ${1+1}`)
console.log("1 = 1 = (1+1) ")

const up = texto => texto.toUpperCase()
console.log(`Olá ${up(nome)}!`)
//Dentro de um Template String é Possível chamar uma Função