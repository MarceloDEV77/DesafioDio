/*Aula de poo*/
class ContaBancaria {
    constructor(agencia, numero, tipo){
       this.agencia =agencia;
       this.numero  =numero;
       this.tipo    =tipo;
       this._saldo   =0;
    }
    /**/
     get saldo(){
     return this._saldo;
     }

     set saldo(valor){
     this._saldo=valor;
     }

     sacar(valor){
        if(valor > this._saldo){
            return "Operação Negada!";
        } 

        return this._saldo;
    }

     depositar(valor) {
         this._saldo = this._saldo + valor;
         return this._saldo
    }
}

class contaCorrente extends ContaBancaria{
    constructor(agencia, numero,credCard){
        super(agencia, numero);
        this.tipo = "corrente";
        this._credCard = credCard;

    }

    get credCard (){
     return this._credCard;
    }

    set credCard(valor){
        this._credCard = valor;
    }
}

class contaPoupanca extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "Poupaça";
        

    }
}

class contaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "Universitária";
    
    }

sacar (valor){

  if(valor >500){
    return "operação negada!" ; 
  }  
  this._saldo = this._saldo - valor

}

}

class Post {

    constructor(tipo, titulo, usuario, content,comentario){
      this.tipo       =  tipo;
      this.titulo     =  titulo;
      this.usuario    =  usuario;
      this.content    =  content; 
      this.comentario =  comentario;
      
    }

    get titulo(){
        return this.titulo;
    }

    get postagem (){
    post ={
        titulo:this.titulo,
        usuario:this.usuario,
        content:this.content,
        comentario:this.comentario
    }
    return this.post;
    }
   
}
