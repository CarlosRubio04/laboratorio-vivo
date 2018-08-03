import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { routeThree } from './route-three.component';

describe('routeThree', () => {
  let component: routeThree;
  let fixture: ComponentFixture<routeThree>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ routeThree ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(routeThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
