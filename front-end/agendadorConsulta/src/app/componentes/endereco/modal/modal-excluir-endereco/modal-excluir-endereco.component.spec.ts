import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirEnderecoComponent } from './modal-excluir-endereco.component';

describe('ModalExcluirEnderecoComponent', () => {
  let component: ModalExcluirEnderecoComponent;
  let fixture: ComponentFixture<ModalExcluirEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExcluirEnderecoComponent]
    });
    fixture = TestBed.createComponent(ModalExcluirEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
