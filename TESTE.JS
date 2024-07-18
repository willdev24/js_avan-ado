 /*const teste = function dog(name){

    this.name = name
    const self = this
    
           
       const rodar = function(num) {
                console.log(self.name,"tem ", num)
               
            }
      return{
        rodar,
        name
      }

 }



//teste("willao").rodar(24)
const des= teste("will")
console.log( des)
teste(20).rodar(20)
*/


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

car1.make
