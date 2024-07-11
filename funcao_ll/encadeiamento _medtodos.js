//PARA USAR O ENCADEIAMENTO VC PRECISA RETORNAR O THIS PARA PODER ENCADEAR

// metodo muito bom para usar com validaçao de formularios 

//reveal pattern e encadeamento de metodos + closures//       reveal pattern: É O ISOLAMENTO DE VARIAVEIS, 
//SENDO VISTAS APENAS DENTRO DA SUA FUNÇAO/OBJ LOCAL E nao GLOBALMENTE, EVITANDO CONFLITOS EM HTML COM MAIS DE UM SCRIPT 

const calc =(function (){

let n = 0

function _chenumber(n){
if(typeof n !== "number"){
    throw TypeError("essa valor nao é um number")
}}

function somar(_n){
    _chenumber(_n)
    n += _n
    return this
}

function dividir(_n){
    _chenumber(_n)
    n /= _n
    return this
}

function subtrair(_n){
    _chenumber(_n)
    n -= _n
    return this
}

function multiplicar(_n){
    _chenumber(_n)
    n *= _n
    return this
}


function value(){
console.log(n)
return this
}

return{
    somar,subtrair,multiplicar,dividir,value
}
})()

calc.somar(10).subtrair(6).multiplicar(10).dividir(5).value()


