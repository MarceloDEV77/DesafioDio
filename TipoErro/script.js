
function avalida(arr,num){
    try{
        if(!arr && !num) throw new ReferenceError("envie os parâmetros!");
        if(typeof arr !=='object') throw new TypeError("O array precisa ser tipo objeto!");
        if(typeof num !=='number') throw new TypeError("O aaray precisa ser tipo numero!");
        if(arr.length !=='number') throw new RangeError("Tamanho invalido!");
        return arr;
    }catch(e){
if(e instanceof ReferenceError){
    console.log('esse erro é um RefenceError')
    console.log(e.message)
    console.log(e.name)
    console.log(e.stack)
}else if(e instanceof TypeError){
    console.log('esse erro é um TypeError')
    console.log(e.message)
    console.log(e.name)
    console.log(e.stack)
}else if(e instanceof RangeError){
    console.log('esse erro é um RangeError')
    console.log(e.message)
    console.log(e.name)
    console.log(e.stack)
}else{
    console.log("acionteceu um erro não esperado tipo =>" +e);
     }
    }
    
}
console.log(avalida([1,9,5,7,1],5));
////