import { Cliente } from './../shared/cliente';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formCliente : FormGroup ; //gambiarr

  constructor() {
  //  formCliente : FormGroup ; //gambiarr
  }

  ngOnInit(){
    this.createForm(new Cliente());
  }


  createForm(cliente: Cliente){
    this.formCliente = new FormGroup({
      nome: new FormControl(cliente.nome),
      tipo: new FormControl(cliente.tipo),
      genero: new FormControl(cliente.genero),
      dataNascimento: new FormControl(cliente.dataNascimento),
      observacao: new FormControl(cliente.observacao),
      inativo: new FormControl(cliente.inativo)
    })
  }

  onSubmit(){
    //Aqui implementar a logica ao salvar
    console.log(this.formCliente.value);

    // chamando a função createForm para limpar os campos na tela
     this.formCliente.reset(new Cliente());
  }


}
