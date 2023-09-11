import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirComponent } from './modal-excluir.component';

describe('ModalExcluirComponent', () => {
  let component: ModalExcluirComponent;
  let fixture: ComponentFixture<ModalExcluirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExcluirComponent]
    });
    fixture = TestBed.createComponent(ModalExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
