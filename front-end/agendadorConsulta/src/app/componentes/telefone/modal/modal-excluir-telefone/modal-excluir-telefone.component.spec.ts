import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirTelefoneComponent } from './modal-excluir-telefone.component';

describe('ModalExcluirTelefoneComponent', () => {
  let component: ModalExcluirTelefoneComponent;
  let fixture: ComponentFixture<ModalExcluirTelefoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExcluirTelefoneComponent]
    });
    fixture = TestBed.createComponent(ModalExcluirTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
