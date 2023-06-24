import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoclienteComponent } from './historicocliente.component';

describe('HistoricoclienteComponent', () => {
  let component: HistoricoclienteComponent;
  let fixture: ComponentFixture<HistoricoclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoclienteComponent]
    });
    fixture = TestBed.createComponent(HistoricoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
