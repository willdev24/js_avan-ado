


const animal ={

    som: "minhauuu",
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


const cachorro ={

    som:"uhuuu",
    tipo:"cachorro",
    cor:"cinza",

}

Object.setPrototypeOf(cachorro,animal)
cachorro.emitirSom()