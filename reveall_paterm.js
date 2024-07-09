

const operacao = (function(){

let n = 0 

function somar(_n){

     n += _n
}

function subtrair(_n){
    n -= _n
}

function valor(){

    console.log(n)
}

return{
somar,
subtrair,
valor
}

})()

console.log(operacao)

operacao.somar(10)
operacao.subtrair(2)
operacao.valor()
