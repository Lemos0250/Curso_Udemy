const saudacao = "Opa" //Contexto Léxico (Local onde Físicamente a Sua variável esta no seu Código)

function exec() {
    const saudacao = "Fala Meu Bom" //Contexto Léxico 2
    return saudacao
}

//Objetos são grupos alinahdos de Pares/Nome Valor
const Cliente = {
    nome: 'Pedro',
    idade: 16,
    peso: "65 kg",
    endereco: {
        logradouro: "Beira Mar",
        numero: 1810
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)