import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
    selector: 'app-route-one',
    templateUrl: './route-one.component.html',
    styleUrls: ['./route-one.component.scss']
})

export class routeOne implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    
    
    ngOnInit() {}
}
