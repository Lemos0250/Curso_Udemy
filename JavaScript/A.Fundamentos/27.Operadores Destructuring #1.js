//É um Operador de Desestruturação, Tira algo da Estrutura (Objeto) Tira elementos que vc Procura Introduzido no ES2015

const pessoa = {
    nome: "Borat",
    idade: 19,
    endereco: {
        logadouro: "Rua Nadir de Medeiros ,121",
        Ap: "Ap:" + 201
    }
}

const {  nome, idade} = pessoa //Essas Duas Chaves Representam o Destructing, const {O Atributo que deve Ser Tirado} = Objeto.
console.log(nome, idade)

const { nome: n, idade:i } = pessoa //Tire da estrutura que é um Objeto o Atributo Nome e Idade, e crie o Atributo N e Atributo i
console.log(nome, idade)

const { endereco: { logadouro, Ap } } = pessoa
console.log(logadouro, Ap)

const { Altura, Cheiro = true} = pessoa
console.log(Altura, Cheiro)

//Ao Desestruturar um Dado Alinhado, tem que notar se o caminho até ele está livre.


