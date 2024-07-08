// nome dao as variaveis que ficam ao redos de uma funçao
//ou seja, uma vez declaraada ele sera lembrada mesmo fora do escopo

const teste = (function(){   //declaro uma funçao imediata
 
    let n = 0

    return function (){

        console.log("testando escopo local de teste", n)
        return "retorno " + n
    }


})()

console.log(teste) // aqui ele me retorna a funçao 
console.log(teste()) // aq me retornna a execuçao da funçao