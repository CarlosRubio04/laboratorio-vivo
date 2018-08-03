import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { routeOne } from './route-one.component';

describe('routeOne', () => {
  let component: routeOne;
  let fixture: ComponentFixture<routeOne>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ routeOne ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(routeOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
