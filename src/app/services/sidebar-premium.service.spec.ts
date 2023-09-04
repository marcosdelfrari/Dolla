import { TestBed } from '@angular/core/testing';

import { SidebarPremiumService } from './sidebar-premium.service';

describe('SidebarPremiumService', () => {
  let service: SidebarPremiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarPremiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
