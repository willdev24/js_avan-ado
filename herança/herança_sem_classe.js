//objetos SEM CLASSE, APENAS JAVASCRIPT PURO
//heranca sem classe

const dev = function(nome, idade, principaLingua, tipodeDev){

this.nome = nome
this.idade = idade
this.principaLingua = principaLingua
this.tipodeDev = tipodeDev

this.saudacao= function(){

console.log(`Olá, me chamo ${this.nome} tenho ${this.idade} anos, minha principal linguuagem é ${this.principaLingua} e sou DEV ${this.tipodeDev}`)
}}


const frontend = function( nome,idade,principaLingua, tipodeDev,framework){

    const newDev = new dev(nome, idade, principaLingua, tipodeDev)
    this.framework = framework
    Object.setPrototypeOf(this, newDev)

}


const devFrontend = new frontend("willy thiago",24,"javascript", "frontend","react")
devFrontend.saudacao()
console.log(devFrontend)

//---------------//----------//

const Backend = function( nome,idade,principaLingua, banco){

    const newDev = new dev(nome, idade, principaLingua, "backend")
    this.banco = banco
    Object.setPrototypeOf(this, newDev)

  

    this.saudacao= function(){

        console.log(`Olá, me chamo ${this.nome} tenho ${this.idade} anos e sou especialisata em ${this.banco}` )
        }

}

const devBackend = new Backend("gustavo guanabra", 32, "pyton", "mongoDB")
devBackend.saudacao()



