/*aula dio metodo map filter reduce*/
  
/*function somaN(arg) {
 return arg.reduce(function(prev, current){
   console.log(prev);
   console.log(current);
    return prev + current;
 },0);
}
1
const arg = [7, 8];
console.log(somaN(arg))

/*-----------------Exercio 2-----------------------------*/


const lista = [
{
  nome:'sabão em pó',
  preco:32
},
{
  nome:'lata de sardinha',
  preco:14
},
{
 nome:'5 kilos de arroz',
 preco:38

}
];

const saldo = 150;

function calcula(saldo, lista){
return lista.reduce(function(prev,current, index){
  console.log('rodada',index + 1);
  console.log({prev});
  console.log({current});
  return prev - current.preco;
},saldo);
}
console.log(calcula(saldo,lista));