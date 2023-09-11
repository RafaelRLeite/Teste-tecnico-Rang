import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateMedicoComponent } from './modal-update-medico.component';

describe('ModalUpdateMedicoComponent', () => {
  let component: ModalUpdateMedicoComponent;
  let fixture: ComponentFixture<ModalUpdateMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalUpdateMedicoComponent]
    });
    fixture = TestBed.createComponent(ModalUpdateMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
