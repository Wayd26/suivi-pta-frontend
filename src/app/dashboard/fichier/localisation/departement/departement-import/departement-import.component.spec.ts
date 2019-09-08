import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementImportComponent } from './departement-import.component';

describe('DepartementImportComponent', () => {
  let component: DepartementImportComponent;
  let fixture: ComponentFixture<DepartementImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
