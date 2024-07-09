
const criarCachorro = function(nome){

    let position = 0
return {
    nome,
    andar(distancia){
      position += distancia
      console.log(this.nome , distancia)
    }

}



}

const rex = criarCachorro("willy")
rex.andar(50)

const a = criarCachorro("willy")
a.andar(50)