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
    selector: 'app-route-three',
    templateUrl: './route-three.component.html',
    styleUrls: ['./route-three.component.scss']
})

export class routeThree implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    
    
    ngOnInit() {}
}
