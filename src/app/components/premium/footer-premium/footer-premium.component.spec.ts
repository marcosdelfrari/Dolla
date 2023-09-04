import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPremiumComponent } from './footer-premium.component';

describe('FooterPremiumComponent', () => {
  let component: FooterPremiumComponent;
  let fixture: ComponentFixture<FooterPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterPremiumComponent]
    });
    fixture = TestBed.createComponent(FooterPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
