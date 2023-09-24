import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarTelefoneComponent } from './modal-criar-telefone.component';

describe('ModalCriarTelefoneComponent', () => {
  let component: ModalCriarTelefoneComponent;
  let fixture: ComponentFixture<ModalCriarTelefoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCriarTelefoneComponent]
    });
    fixture = TestBed.createComponent(ModalCriarTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
