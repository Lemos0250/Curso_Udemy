const programa = "H4ck3r"

console.log(programa.charAt(0))
//Serve para achar um caracter específico dentro de uma String
console.log(programa.charAt(16))
//Vai retornar um Valor vazio
console.log(programa.charCodeAt(3))
//Pega o Valor da String mas Converte para o Valor dentro da Tabela ASC (Tabela Unicode)
console.log(programa.indexOf(3))
//Busca o Valor e Trás o Resultado sendo onde o valor está naquela constante, caso bote um valor que não exite ira retornar "-1"
console.log(programa.substring(1))
//Vai a partir do indice 1 até o ultimo índice (Começa pelo índice 0)
console.log(programa.substring(0, 4))
//Vai dar um valor do Índice 0 até o Índice 3 (não vai até o índice final)
console.log('Programa '.concat(programa).concat("!"))
//Normalmente eu Faço isso com o "+" 
console.log(programa.replace(3, 'e'))
//Vai trocar o valor do Índice 3 por um 'e'
console.log('João,Vinicius,Radas'.split(','))
//Converte a String em um Array, separando as virgulas
