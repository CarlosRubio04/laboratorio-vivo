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
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
    trigger('OneLine', [
        state('show', style({
            display: 'block',
            opacity: 1,
        })),
        state('hide',   style({
            display: 'none',
            opacity: 0,
        })),
        transition('show => hide', animate('300ms ease-out')),
        transition('hide => show', animate('100ms ease-in'))
        ])
    ]
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    showOne = false;
    showTow = false;
    showThree = false;
    showFour = false;

    visbleOne = false;
    visbleTow = false;
    visbleThree = false;
    visbleFour = false;

    constructor() { }


    get showFirst(){
        return this.showOne ? 'show' : 'hide'
    }
    get showSecond(){
        return this.showTow ? 'show' : 'hide'
    }
    get showThird(){
        return this.showThree ? 'show' : 'hide'
    }
    get showFourth(){
        return this.showFour ? 'show' : 'hide'
    }
    toggleOne() {
        this.showTow = false;
        this.visbleTow = false;
        this.showThree = false;
        this.visbleThree = false;
        this.showFour = false;
        this.visbleFour = false;

        this.showOne = true;
        this.visbleOne = true;
    }

    toggleSecond() {
        this.showOne = false;
        this.visbleOne = false;
        this.showThree = false;
        this.visbleThree = false;
        this.showFour = false;
        this.visbleFour = false;

        this.showTow = true;
        this.visbleTow = true;
        
    }

    toggleThird() {
        this.showOne = false;
        this.showTow = false;
        this.visbleOne = false;
        this.visbleTow = false;
        this.showFour = false;
        this.visbleFour = false;

        this.showThree = true;
        this.visbleThree = true;
        
    }
    toggleFourth() {
        this.showOne = false;
        this.showTow = false;
        this.visbleOne = false;
        this.visbleTow = false;
        this.showThree = false;
        this.visbleThree = false;

        this.showFour = true;
        this.visbleFour = true;
        
    }

    ngOnInit() {}
}
