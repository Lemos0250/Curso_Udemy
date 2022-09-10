console.log(Math.ceil(6.1)) //Opera um Arredondamento 

const obj1 = {}
obj1.nome = "Bola"
//obj1["nome"] = "Bola"

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log("Exec")
    }
}

const obj2 = new Obj("Chaleira")
const obj3 = new Obj("Caneco")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()