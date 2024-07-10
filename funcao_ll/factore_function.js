
/* metodo ruim e nao aconselhavel
const rex ={
    name:"dog",
    latir(){},
    andar(){},
    Comer(){}
}

const toto ={
    name:"dog",
    latir(){},
    andar(){}
}

const re ={
    name:"dog",
    latir(){},
    andar(){}
}*/

// a ser ultilizado

function criarCachorro(name){

    let position = 0

   
return{
    name,

    latir(){
        console.log(this.name, "está latindo")
    },
    andar(distancia){
        position += distancia
        console.log(this.name, "andou", distancia, "m", "e ja percorreu um total de ", position)
    
    },
    Comer(comida){
        console.log(`${this.name} percorreu todo  trajeto e ganhou ${comida}`)
    },

    position(){
         return position
    }




}
}

const rex = criarCachorro("willy")

rex.Comer("pizza")
rex.andar(400)
rex.andar(400)
rex.andar(400)
rex.latir()
console.log(rex.position())

//

const apolo = criarCachorro("apolo")
apolo.andar(50)
apolo.andar(150)

apolo.Comer("raçao pedigri")
apolo.latir()
console.log(apolo.position())
//quase a mesma coisa que uma function contruct