import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirAgendamentoComponent } from '../modal-excluir/modal-excluir.component';

describe('ModalExcluirAgendamentoComponent', () => {
  let component: ModalExcluirAgendamentoComponent;
  let fixture: ComponentFixture<ModalExcluirAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExcluirAgendamentoComponent]
    });
    fixture = TestBed.createComponent(ModalExcluirAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
