import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUnidadeSaudeComponent } from './listar-unidade-saude.component';

describe('ListarUnidadeSaudeComponent', () => {
  let component: ListarUnidadeSaudeComponent;
  let fixture: ComponentFixture<ListarUnidadeSaudeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarUnidadeSaudeComponent]
    });
    fixture = TestBed.createComponent(ListarUnidadeSaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
