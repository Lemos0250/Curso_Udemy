const funcs = []
//Declarando um Array com Var

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    //Função anonima 
    })
}
//Vai de 0 a 9 encramentando de 1 em 1

funcs[2]()
funcs[8]()
//Como a variável não tem escopo de bloco e