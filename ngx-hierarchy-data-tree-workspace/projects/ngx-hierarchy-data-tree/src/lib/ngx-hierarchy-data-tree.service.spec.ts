import {TestBed} from '@angular/core/testing';

import {NgxHierarchyDataTreeService} from './ngx-hierarchy-data-tree.service';

describe('NgxHierarchyDataTreeService', () => {
  let service: NgxHierarchyDataTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHierarchyDataTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
