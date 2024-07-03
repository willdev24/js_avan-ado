class dev{
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
const dev2 = new dev('gabriela xavier', 19, 'pyton', 'front end')
const dev3 = new dev('Gustavo laranjeira', 30, 'ryby', 'moball')

dev1.saudac()
dev2.saudac()
dev3.saudac()
