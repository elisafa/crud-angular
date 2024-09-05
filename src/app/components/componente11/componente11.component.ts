import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../../modelo/Pessoa';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {
// Objeto de formulário

formulario = new FormGroup({
  nome    : new FormControl('', [Validators.required, Validators.minLength(3)]),
  idade   : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]), 
  cidade  : new FormControl('', [Validators.required, Validators.minLength(3)])
});

// Visibilidade dos botoes
btnCadastrar:boolean = true;

// Vetor
vetor:Pessoa[] = [];

// Armazenar o indicie da pessoa selecionada
indice:number = -1;

// Funcao de cadastro
cadastrar(){

  //cadastro no vetor
  this.vetor.push(this.formulario.value as Pessoa);

  // limpeza dos inputs
  this.formulario.reset();

  //visualizaçao via console
  // console.table(this.vetor)
}

selecionar(indice:number){
  //Atribuir o indice da pessoa
  this.indice = indice;

  //Atribuir os dado
  this.formulario.setValue({
    nome : this.vetor[indice].nome,
    idade : this.vetor[indice].idade,
    cidade : this.vetor[indice].cidade
  });

  this.btnCadastrar = false;
}

// Função de alterar
alterar(){
  //Alterar vetor
  this.vetor[this.indice] = this.formulario.value as Pessoa;

  //limpar inputs
  this.formulario.reset();

  //visibilidade dos botoes
  this.btnCadastrar = true;
}

//Remoçao
remover(){

  // removendo pessoa do vetor
  this.vetor.splice(this.indice, 1)

  //limpar os inputs
  this.formulario.reset();

  //visibilidade dos botoes
  this.btnCadastrar = true;
}

//funcao de cancelamento
cancelar(){
  //limpar dos inputs
  this.formulario.reset();

  //visibilidade dos botoes
  this.btnCadastrar = true;
}

}
