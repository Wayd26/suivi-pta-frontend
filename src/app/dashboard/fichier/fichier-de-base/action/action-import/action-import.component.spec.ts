import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionImportComponent } from './action-import.component';

describe('ActionImportComponent', () => {
  let component: ActionImportComponent;
  let fixture: ComponentFixture<ActionImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
