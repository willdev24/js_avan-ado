function dog(name){
this.name = name

this.rodar =function() {
    console.log(name)
    
}
}

const dog1 = new dog('gabby')

dog.prototype.toString = function to(){
   return `${this.name}`
}
console.log(dog1.toString())
