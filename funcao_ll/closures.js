// nome dao as variaveis que ficam ao redos de uma funçao
//ou seja, uma vez declaraada ele sera lembrada mesmo fora do escopo

const teste = (function(){   //declaro uma funçao imediata
 
    let n = 0

    return function (){

        console.log("testando escopo local de teste", ++n)
        return "retorno " + n
    }


})()

//console.log(teste) // aqui ele me retorna a funçao 
//console.log(teste()) // aq me retornna a execuçao da funçao


// fazer um contador tamb com o closures
// como a variavel n esta fora da funçao que esta sendo executada, eu posso aplica um acrecimo cada vez que ela é chamada 
for(let i =0 ; i<10 ; i++){
    console.log(teste() ) 
}