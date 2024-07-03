class dev{     //pai
    constructor(nome,idade,principalLinguagem,stack){

          this.nome = nome
          this.idade = idade;
          this.linguagem = principalLinguagem;
          this.stack =stack;
           
}
  saudac(){
    console.log( ` olá, me chamo ${this.nome},  tenho ${this.idade} anos sou dev ${this.stack} e minha principal linguagem e ${this.linguagem} \n` )
 }} 

const dev1 = new dev('willy thiago', 24, 'js', 'full stack')


dev1.saudac()

//filho

class frontEnd  extends dev{
    constructor(nome,idade,principalLinguagem,stack){

        super()

          this.nome = nome
          this.idade = idade;
          this.linguagem = principalLinguagem;
          this.framework = stack;
           
}
  saudac(){
    console.log( ` olá, me chamo ${this.nome},  tenho ${this.idade} anos sou dev ${this.framework} e minha principal linguagem e ${this.linguagem} \n` )
 }} 


//filho
 
class backend  extends dev{
    constructor(nome,idade,principalLinguagem,stack){

        super()

          this.nome = nome
          this.idade = idade;
          this.linguagem = principalLinguagem;
          this.bancoDedados = stack;
           
}
  saudac(){
    console.log( ` olá, me chamo ${this.nome},  tenho ${this.idade} anos sou dev ${this.bancoDedados} e minha principal linguagem e ${this.linguagem} \n` )
 }} 
 
 
 const front = new dev('willy thiago', 24, 'js', 'react')
 front.saudac()
 console.log(front)
 
 
 const backends = new dev('willy thiago', 24, 'js', 'mongoDb')
 backends.saudac()
 console.log(backends)