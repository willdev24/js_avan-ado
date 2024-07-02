// let : eu consigo alterar o valor da variavel declarada e ela,caso seja declaro dentro de um escopo local, nao funciona fora desse escopo

//var : menos usada, diferente de let, o "var" pode ser acessado de qualquer escopo, como se fosse uma variavel 
//global mesmo que seja declarada dentro de um scopo local

// const : uma variavel const vc pode manipular os valores porem nao pode alterar/ atribuir um novo valor 



//const val = 50
//val = 80
//console.log(val)

/*Info: Start process (19:31:01)
Error: 
c:\js_avançado\node_d3280b181f6ad.tmp.js:12
val = 80*/

// no exemplo assima vc verifica o erro 

let valor = 50
valor = 10 

console.log(valor) //com let da certo

//agora vamos apenas modificar os valores ja atribuidos

const arr = [1,2,3,4,5]

delete arr[0]

console.log(arr) // lpgp nem um erro acontece

