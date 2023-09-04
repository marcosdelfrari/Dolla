import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesPremiumComponent } from './cases-premium.component';

describe('CasesPremiumComponent', () => {
  let component: CasesPremiumComponent;
  let fixture: ComponentFixture<CasesPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasesPremiumComponent]
    });
    fixture = TestBed.createComponent(CasesPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
