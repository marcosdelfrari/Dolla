import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPremiumComponent } from './header-premium.component';

describe('HeaderPremiumComponent', () => {
  let component: HeaderPremiumComponent;
  let fixture: ComponentFixture<HeaderPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderPremiumComponent]
    });
    fixture = TestBed.createComponent(HeaderPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
