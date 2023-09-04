import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPremiumComponent } from './navbar-premium.component';

describe('NavbarPremiumComponent', () => {
  let component: NavbarPremiumComponent;
  let fixture: ComponentFixture<NavbarPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarPremiumComponent]
    });
    fixture = TestBed.createComponent(NavbarPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
