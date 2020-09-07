import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementEditComponent } from './departement-edit.component';

describe('DepartementEditComponent', () => {
  let component: DepartementEditComponent;
  let fixture: ComponentFixture<DepartementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
