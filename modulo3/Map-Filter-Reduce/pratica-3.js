/*aula dio metodo map filter reduce*/
  
function filtraPares(arr){
return arr.filter(callBack)
}

function callBack(item){
  return item % 2 !== 0;
}

const myArr =[7,8,6,3,82,9,1,4,78];
console.log(filtraPares(myArr));