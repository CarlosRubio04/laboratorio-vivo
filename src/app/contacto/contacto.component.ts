import { Component, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Http, Headers, Response} from '@angular/http';

import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    stagger
} from '@angular/animations';


@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent implements OnInit {

    model = {
        left: true,
        middle: false,
        right: false
    };

    rForm: FormGroup;
    post:any;
    nombre:string = '';
    documento:number;
    telefono:number;
    email:string;
    ruta:number;
    rutaUno:number = 0;
    rutaDos:number = 0;
    rutaTres:number = 0;
    rutaCuatro:number = 0;
    institucion:string;
    titleAlert:string = 'Este campo es obligatorio';

    campaignId:number = 19;
    partnerId:number = 1;
    tipo:string = "Direct";

    showInputs:boolean = false;
    showError:boolean = false;
    showSucces:boolean = false;



    constructor(public el: ElementRef, 
        private fb: FormBuilder, 
        private http:Http,
        private router:Router, 
        private route: ActivatedRoute){

        


        if(this.route.snapshot.queryParams['partnerId'] == null){
            this.partnerId = 1;
        }else {
            this.partnerId = this.route.snapshot.queryParams['partnerId'];
        }

        if(this.route.snapshot.queryParams['type'] == null){
            this.partnerId = 1;
        }else {
            this.tipo = this.route.snapshot.queryParams['type'];
        }

        this.rForm = fb.group({
            'nombre': [null, Validators.compose([
                Validators.required, 
                Validators.minLength(3), 
                Validators.maxLength(140),
                ])],
            'documento': [null, Validators.compose([
                Validators.required, 
                Validators.minLength(3), 
                Validators.maxLength(12),
                ])],
            'telefono': [null, Validators.compose([
                Validators.required, 
                Validators.minLength(7), 
                Validators.maxLength(12),
                ])],
            'email': [null, Validators.compose([
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
                ])],
            'ruta': [0],
            'rutaUno': [null],
            'rutaDos': [null],
            'rutaTres': [null],
            'institucion': [null]
        });
    }

    onChange(deviceValue) {
        if(deviceValue == 4){
            this.showInputs = true;
        }else {
            this.showInputs = false;
        }
    }
    
    public sendData(lead){
        this.nombre = lead.nombre;
        this.documento = lead.documento;
        this.telefono = lead.telefono;
        this.email = lead.email;
        this.ruta = lead.ruta;
        this.rutaUno = lead.rutaUno;
        this.rutaDos = lead.rutaDos;
        this.institucion = lead.institucion;

        this.http.get(`http://dxc.charlsdesigner.com/back/?campaignId=${this.campaignId}&partnerId=${this.partnerId}&type=${this.tipo}&nombre=${this.nombre}&documento=${this.documento}&telefono=${this.telefono}&email=${this.email}&ruta=${this.ruta}&institucion=${this.institucion}&num-ruta-uno=${this.rutaUno}&num-ruta-dos=${this.rutaDos}&num-ruta-tres=${this.rutaTres}`)
        .subscribe((res: Response)=> {
            const backOffice = res;
            console.log(backOffice);
            if (backOffice.ok) {
                this.showSucces = true;
                setTimeout(() => this.router.navigate(['/gracias']), 500);
            }else {
                this.showError = true;
            }
        })

    }
    
    ngOnInit() {
        
    }
}
