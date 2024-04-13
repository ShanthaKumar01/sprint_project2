import { TestBed } from '@angular/core/testing';
import { placementService } from './placement.service';

describe('placementService', () => {
  let service: placementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(placementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
