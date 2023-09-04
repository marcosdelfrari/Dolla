import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoPremiumComponent } from './contato-premium.component';

describe('ContatoPremiumComponent', () => {
  let component: ContatoPremiumComponent;
  let fixture: ComponentFixture<ContatoPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatoPremiumComponent]
    });
    fixture = TestBed.createComponent(ContatoPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
