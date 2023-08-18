import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterclassComponent } from './masterclass.component';

describe('MasterclassComponent', () => {
  let component: MasterclassComponent;
  let fixture: ComponentFixture<MasterclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterclassComponent]
    });
    fixture = TestBed.createComponent(MasterclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
