import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaSelectorComponent } from './prueba-selector.component';

describe('PruebaSelectorComponent', () => {
  let component: PruebaSelectorComponent;
  let fixture: ComponentFixture<PruebaSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
