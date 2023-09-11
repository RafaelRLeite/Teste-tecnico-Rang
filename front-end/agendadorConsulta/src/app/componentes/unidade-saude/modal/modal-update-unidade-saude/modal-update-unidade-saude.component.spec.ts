import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateUnidadeSaudeComponent } from './modal-update-unidade-saude.component';

describe('ModalUpdateUnidadeSaudeComponent', () => {
  let component: ModalUpdateUnidadeSaudeComponent;
  let fixture: ComponentFixture<ModalUpdateUnidadeSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalUpdateUnidadeSaudeComponent]
    });
    fixture = TestBed.createComponent(ModalUpdateUnidadeSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
