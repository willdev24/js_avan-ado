//javascripty é orientado a objetos com prototicos e nao orientado a objeto com classes !!


const animal ={

    som: "som de um anial",
    tipo: "animal",
    cor: "neutra",
    emitirSom: function(){
        
        console.log(this.som , this.tipo, this.cor)
    }
}

const gato ={

    som:"uauauau",
    tipo:"gato",
    cor:"amarelo",

}

Object.setPrototypeOf(gato, animal)
gato.emitirSom()


const gatoRaivoso={

    som:"sou muitoo braboo"
  
}

Object.setPrototypeOf(gatoRaivoso,gato)
gatoRaivoso.emitirSom()

const cachorro ={

    som:"uhuuu",
    tipo:"cachorro",
    cor:"cinza",

}

Object.setPrototypeOf(cachorro,animal)
cachorro.emitirSom()

console.log("teste")