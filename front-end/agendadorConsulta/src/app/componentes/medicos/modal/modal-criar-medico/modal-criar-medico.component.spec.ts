import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarMedicoComponent } from './modal-criar-medico.component';

describe('ModalCriarMedicoComponent', () => {
  let component: ModalCriarMedicoComponent;
  let fixture: ComponentFixture<ModalCriarMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCriarMedicoComponent]
    });
    fixture = TestBed.createComponent(ModalCriarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
