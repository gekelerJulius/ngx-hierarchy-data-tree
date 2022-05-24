import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxHierarchyDataTreeComponent} from './ngx-hierarchy-data-tree.component';

describe('HierarchyDataTreeComponent', () => {
  let component: NgxHierarchyDataTreeComponent;
  let fixture: ComponentFixture<NgxHierarchyDataTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxHierarchyDataTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxHierarchyDataTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
