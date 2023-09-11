import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarComponent } from './modal-editar.component';

describe('ModalEditarComponent', () => {
  let component: ModalEditarComponent;
  let fixture: ComponentFixture<ModalEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditarComponent]
    });
    fixture = TestBed.createComponent(ModalEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
