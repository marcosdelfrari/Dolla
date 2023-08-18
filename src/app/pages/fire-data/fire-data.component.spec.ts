import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDataComponent } from './fire-data.component';

describe('FireDataComponent', () => {
  let component: FireDataComponent;
  let fixture: ComponentFixture<FireDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireDataComponent]
    });
    fixture = TestBed.createComponent(FireDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
