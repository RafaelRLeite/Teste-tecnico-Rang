import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirMedicoComponent } from './modal-excluir-medico.component';

describe('ModalExcluirMedicoComponent', () => {
  let component: ModalExcluirMedicoComponent;
  let fixture: ComponentFixture<ModalExcluirMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExcluirMedicoComponent]
    });
    fixture = TestBed.createComponent(ModalExcluirMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
