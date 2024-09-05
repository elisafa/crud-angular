import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  // Variável de imagem
  imagem:string = "dia.jpeg";

// Função para alterar iamgem
alterarImagem(){
  if(this.imagem === "dia.jpeg"){
    this.imagem = "noite.jpeg";
  }else{
    this.imagem = "dia.jpeg";
  }
}
}