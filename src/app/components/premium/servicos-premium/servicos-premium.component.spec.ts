import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosPremiumComponent } from './servicos-premium.component';

describe('ServicosPremiumComponent', () => {
  let component: ServicosPremiumComponent;
  let fixture: ComponentFixture<ServicosPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicosPremiumComponent]
    });
    fixture = TestBed.createComponent(ServicosPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
