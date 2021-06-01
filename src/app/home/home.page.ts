import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage { 

  @ViewChild ('inputTexto') meuInput;
  
  inputTexto = "";

  item: string = ""; 
  
  minhaLista = ["Batata" , "Cebola" , "Tomate"];

  add (item) { 
    this

  }

  adiciona () { 
    this.minhaLista.push(this.inputTexto);
    this.inputTexto="";
    this.meuInput.setFocus();

  }

  remover (indice) { 
    this.minhaLista.splice (indice,1); 
  }

  
  constructor() {}

}
