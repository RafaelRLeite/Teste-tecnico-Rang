import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarUnidadeSaudeComponent } from './modal-criar-unidade-saude.component';

describe('ModalCriarUnidadeSaudeComponent', () => {
  let component: ModalCriarUnidadeSaudeComponent;
  let fixture: ComponentFixture<ModalCriarUnidadeSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCriarUnidadeSaudeComponent]
    });
    fixture = TestBed.createComponent(ModalCriarUnidadeSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
