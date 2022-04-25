
function mudaCor() {
 mudaClasse();
 mudaTexto();
}

function mudaClasse(){
container.classList.toggle('box1Dark');
botao.classList.toggle('btnDark');
footer.classList.toggle('footerDark');
titulo.classList.toggle('texto1Dark');
tituloFooter.classList.toggle('texto2Dark');
}

function mudaTexto(){


if(titulo.classList.contains('texto1Dark')){
   titulo.innerHTML="Dark Mode ON";
   tituloPage.innerHTML="Dark Mode";
   botao.innerHTML="ON";
 }else{
    titulo.innerHTML="Dark Mode OFF"; 
    tituloPage.innerHTML="Light Mode";
    botao.innerHTML="OFF";   
 }


}

const botao =       document.getElementsByClassName('btn')[0];
const titulo =      document.getElementsByClassName('texto1')[0];
const tituloFooter= document.getElementsByClassName('texto2')[0];
const container =   document.getElementsByClassName('box1')[0];
const footer    =   document.getElementsByClassName('footer')[0];
const tituloPage=   document.getElementsByTagName('title')[0];
botao.addEventListener('click',mudaCor);



