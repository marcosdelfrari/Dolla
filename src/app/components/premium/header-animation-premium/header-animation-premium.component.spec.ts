import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAnimationPremiumComponent } from './header-animation-premium.component';

describe('HeaderAnimationPremiumComponent', () => {
  let component: HeaderAnimationPremiumComponent;
  let fixture: ComponentFixture<HeaderAnimationPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderAnimationPremiumComponent]
    });
    fixture = TestBed.createComponent(HeaderAnimationPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
