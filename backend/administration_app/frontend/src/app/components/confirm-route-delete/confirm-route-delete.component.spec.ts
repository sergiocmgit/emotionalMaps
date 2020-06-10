import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRouteDeleteComponent } from './confirm-route-delete.component';

describe('ConfirmRouteDeleteComponent', () => {
  let component: ConfirmRouteDeleteComponent;
  let fixture: ComponentFixture<ConfirmRouteDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmRouteDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmRouteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
