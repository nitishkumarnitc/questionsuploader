/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndexService } from './index.service';

describe('IndexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexService]
    });
  });

  it('should ...', inject([IndexService], (service: IndexService) => {
    expect(service).toBeTruthy();
  }));
});
