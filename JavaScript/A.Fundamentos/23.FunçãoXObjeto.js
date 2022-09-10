console.log(typeof Object) //Uma função
console.log(typeof new Object) //Objeto Criado Por uma Função

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto) // O typeof de Produto por ser uma Classe interna se transfomará em um Função
console.log(typeof new Produto) // Retornará um Objeto pela instância de uma Função

//A função exerce o Papel de Uma Classe e ao estanciar Vira um Objeto