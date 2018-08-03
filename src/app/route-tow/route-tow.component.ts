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
    selector: 'app-route-tow',
    templateUrl: './route-tow.component.html',
    styleUrls: ['./route-tow.component.scss']
})

export class routeTow implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    
    
    ngOnInit() {}
}
