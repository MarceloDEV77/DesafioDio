
////////////map///////////////
function getAdmin(map){
    let admin =[];
    for([key, value]of map){
        if(value==='admin'){
            admin.push(key);
        }
    }
    return admin;
}


const usuarios = new Map();
usuarios.set('luiz','admin');
usuarios.set('Stphany','admin');
usuarios.set('Jorge','user');
usuarios.set('Marcelo','admin');

console.log(getAdmin(usuarios));
///////////////set//////////////////
const myarr =[10,20,30,40,50,60,70,80,110,120];
function valores(arr){
const myset= new Set(arr);
return [...myset];
}

console.log(valores(myarr));
