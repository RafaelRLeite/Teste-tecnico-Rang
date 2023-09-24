import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarEnderecoComponent } from './modal-criar-endereco.component';

describe('ModalCriarEnderecoComponent', () => {
  let component: ModalCriarEnderecoComponent;
  let fixture: ComponentFixture<ModalCriarEnderecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCriarEnderecoComponent]
    });
    fixture = TestBed.createComponent(ModalCriarEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
