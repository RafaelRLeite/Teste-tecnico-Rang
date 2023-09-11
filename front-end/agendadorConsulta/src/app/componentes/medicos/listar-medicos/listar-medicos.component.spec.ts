import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMedicosComponent } from './listar-medicos.component';

describe('ListarMedicosComponent', () => {
  let component: ListarMedicosComponent;
  let fixture: ComponentFixture<ListarMedicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMedicosComponent]
    });
    fixture = TestBed.createComponent(ListarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
