import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsPremiumComponent } from './tags-premium.component';

describe('TagsPremiumComponent', () => {
  let component: TagsPremiumComponent;
  let fixture: ComponentFixture<TagsPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagsPremiumComponent]
    });
    fixture = TestBed.createComponent(TagsPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
