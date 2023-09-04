import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasPremiumComponent } from './artistas-premium.component';

describe('ArtistasPremiumComponent', () => {
  let component: ArtistasPremiumComponent;
  let fixture: ComponentFixture<ArtistasPremiumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistasPremiumComponent]
    });
    fixture = TestBed.createComponent(ArtistasPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
