import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifImportComponent } from './objectif-import.component';

describe('ObjectifImportComponent', () => {
  let component: ObjectifImportComponent;
  let fixture: ComponentFixture<ObjectifImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectifImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
