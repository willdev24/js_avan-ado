class veiculos{

    constructor(modelo,ano,cor,tipo){
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.tipo = tipo
    }
    mostrar(){
        console.log(`${this.tipo} ${this.modelo} , ${this.ano} na cor ${this.cor}`)
    }
}


class carro extends veiculos{
    constructor(modelo,ano,cor,tipo){
    super(modelo,ano,cor,tipo)

    }
}

const carros01 = new carro("ferrari",2015, "vermelho", "esportivo")
const carros02 = new carro("ford",2025, "cinza", "esportivo")
const carros03 = new carro("fiat argo",2020, "vermelho", "convencional")

carros01.mostrar()
carros02.mostrar()
carros03.mostrar()

//---------//-----------//--------------//

class moto  extends veiculos{
    constructor(modelo,ano,cor,tipo){
        super(modelo,ano,cor,tipo)
    
        }
}

const moto01 = new moto("yamaha", 2015 , "branca", "mt09")
const moto02 = new moto("honda", 2018 , "vermelho", "xre")

moto01.mostrar()
moto02.mostrar()

console.log()