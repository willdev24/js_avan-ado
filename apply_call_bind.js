//o this dentro da arow function é global
// o this dentro de uma function é local e pode receber o this de outro lugar tamb
//o this dentro de um objeto é local e para ser enchergado fora do objto deve se passar alguns parametros como o call e apply

//call
this.name = "olamundo"

function miar(){

    console.log( this.name + " auaua  " + this.cor)
}


const cat ={

    name: "mingau",
    cor:"azul",
    falar(){
        miar.call(this)
    }
}

cat.falar()



// pasando parametros com o call

function expor(tipo){

console.log(`tenho um ${tipo} chamado ${this.name} e ele é ${this.especie}`)

}


const animal = {

    name:"rex",
    especie:"mamifero",
    raca: "felino",

    rodar(tipo){

         expor.call(this, tipo)

    }

}

animal.rodar("cavalo")


//bind 

function teste(str, n){

    console.log(this.name)
    console.log(str,n)
}

const teste2 = teste.bind({name:"Gabriela"})

teste2(" esposa do willy ", 19)

//bind eu nao preciso especificar o this pois ele ja faz isso
