/*aula dio metodo map filter reduce*/
const maca = {
value: 2,
}

const laranja ={
    value:3,
}

function mapComThis (arr, thisArg){

 return arr.map(function(item){
     return item * this.value; 
    },thisArg );   
}

const numeros = [1,2];

console.log('Quando for maçã',mapComThis(numeros, maca));
console.log('Quando for laranja',mapComThis(numeros,laranja));