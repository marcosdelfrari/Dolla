import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineYellowComponent } from './line-yellow.component';

describe('LineYellowComponent', () => {
  let component: LineYellowComponent;
  let fixture: ComponentFixture<LineYellowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineYellowComponent]
    });
    fixture = TestBed.createComponent(LineYellowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
