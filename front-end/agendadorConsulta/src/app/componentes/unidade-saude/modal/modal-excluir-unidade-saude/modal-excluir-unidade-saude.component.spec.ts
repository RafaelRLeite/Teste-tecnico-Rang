import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirUnidadeSaudeComponent } from './modal-excluir-unidade-saude.component';

describe('ModalExcluirUnidadeSaudeComponent', () => {
  let component: ModalExcluirUnidadeSaudeComponent;
  let fixture: ComponentFixture<ModalExcluirUnidadeSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExcluirUnidadeSaudeComponent]
    });
    fixture = TestBed.createComponent(ModalExcluirUnidadeSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
