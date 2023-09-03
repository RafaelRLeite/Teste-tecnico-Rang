import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAgendamentosComponent } from './listar-agendamentos.component';

describe('ListarAgendamentosComponent', () => {
  let component: ListarAgendamentosComponent;
  let fixture: ComponentFixture<ListarAgendamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarAgendamentosComponent]
    });
    fixture = TestBed.createComponent(ListarAgendamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
