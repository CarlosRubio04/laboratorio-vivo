import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { routeTow } from './route-tow.component';

describe('routeTow', () => {
  let component: routeTow;
  let fixture: ComponentFixture<routeTow>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ routeTow ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(routeTow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
