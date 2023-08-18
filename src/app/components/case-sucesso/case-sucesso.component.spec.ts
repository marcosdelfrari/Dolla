import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSucessoComponent } from './case-sucesso.component';

describe('CaseSucessoComponent', () => {
  let component: CaseSucessoComponent;
  let fixture: ComponentFixture<CaseSucessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseSucessoComponent]
    });
    fixture = TestBed.createComponent(CaseSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
