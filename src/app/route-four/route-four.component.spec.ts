import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { routeFour } from './route-four.component';

describe('routeFour', () => {
  let component: routeFour;
  let fixture: ComponentFixture<routeFour>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ routeFour ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(routeFour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
