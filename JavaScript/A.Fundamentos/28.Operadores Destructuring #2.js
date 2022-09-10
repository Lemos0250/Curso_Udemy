const [a] = [789]
console.log(a)

const [n1, n3, n5, n6 = 0] = [1, 3, 5, 6]
console.log(n1, n3, n5, n6) //Em uma Unica Atribuição é possível Retirar Vários Números

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)