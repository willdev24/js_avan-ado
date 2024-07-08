//um callback é uma funçao que recebe outra funçao dentro dos parametros 
// todas as funçoes de alta ordem recem um callbak
//e: map , filter, reduce, ect...


//ex: 

const somar = ( x , y ) => x + y 

const calcular  = (x , y, computar) => computar(x, y)

const resultado = calcular(10, 20, somar)

console.log(resultado)


//ex 2

const saudacao = (nome) => `olá senhor ${nome}`

const  entradaDEuser = (callback)=>{

    const nome = "willy thiago da silva santos"

   return callback(nome)

}
const user = entradaDEuser(saudacao)
console.log(user)