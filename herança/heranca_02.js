//

//organizando mais o extends

class dev{     //pai
    constructor(nome,idade,principalLinguagem,stack,){

          this.nome = nome
          this.idade = idade;
          this.linguagem = principalLinguagem;
          this.stack =stack;
           
}
  saudac(){
    console.log( `olá, me chamo ${this.nome},  tenho ${this.idade} anos sou dev ${this.stack} e minha principal linguagem e ${this.linguagem} \n` )
}} 


class frontEnd  extends dev{

    constructor(nome,idade,principalLinguagem,stack, framework){
        super(nome,idade,principalLinguagem,stack)  
        this.framework = framework

}
    } 

class backend  extends dev{
    constructor(nome,idade,principalLinguagem,stack ,biblioteca){
        super(nome,idade,principalLinguagem,stack)  
        this.biblioteca = biblioteca        
}
} 


 const front = new frontEnd('willy thiago', 24, 'js',"front end", 'react')
 front.saudac()
 
 const backends = new backend('willy thiago', 24, 'js','back end', 'mongoDb')
 backends.saudac()

 console.log(front) 
console.log(backends)
