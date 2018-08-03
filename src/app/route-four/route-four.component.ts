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
    selector: 'app-route-four',
    templateUrl: './route-four.component.html',
    styleUrls: ['./route-four.component.scss']
})

export class routeFour implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    
    
    ngOnInit() {}
}
