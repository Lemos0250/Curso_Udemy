{
    {
        {
            {
                var sera = "será ???"
            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 2022
    console.log(local) //Será Visivel
}
console.log(local) //Não Será Visivel pois Uma Variável dentro de uma Função o Escopo não será visivel fora da Função

//Variável tem dois Escopos: Global ou Var dentro de um Escopo de Função