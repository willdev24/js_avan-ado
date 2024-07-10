
function criarCachorro(name){
  let position = 0

return{
  name,

 get latir(){
      console.log(this.name, "está latindo")
  },
  andar(distancia){
      position += distancia
      console.log(this.name, "andou", distancia, "m", "e ja percorreu um total de ", position)
  
  },
  Comer(comida){
      console.log(`${this.name} percorreu todo  trajeto e ganhou ${comida}`)
  },

  get position(){
       return position
  }

}}
const rex = criarCachorro("willy")

rex.Comer("pizza")
rex.andar(400)
rex.andar(400)
rex.andar(400)
rex.latir
console.log(rex.position)

// metodo get , vc nao obtem mais uma um metodo  ao ultilizar o GET, pois vc chama como propriedade do obj