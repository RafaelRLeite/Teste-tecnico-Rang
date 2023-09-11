import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarAgendamentoComponent } from '../modal-editar/modal-editar.component';

describe('ModalEditarAgendamentoComponent', () => {
  let component: ModalEditarAgendamentoComponent;
  let fixture: ComponentFixture<ModalEditarAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditarAgendamentoComponent]
    });
    fixture = TestBed.createComponent(ModalEditarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
