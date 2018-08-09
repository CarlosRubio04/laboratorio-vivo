import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../services/autorizacion.service'

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

	registro:any = {};
  callBack:boolean = false;
  callBackMessage:string = '';

  constructor(private autorizacionService:AutorizacionService) {}

  registrar() {
  	this.autorizacionService.singin(this.registro.email, this.registro.password);
    this.callBack = true;
    if (this.autorizacionService.callBack) {
       this.callBackMessage = 'Usuario Registrado Correctamente';
    }else {
      this.callBackMessage = 'Hubo un error al crear el usuario';
    }
  } 
  close() {
    this.callBack = false;
  }

}
