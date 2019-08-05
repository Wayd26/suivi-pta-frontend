import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeEditComponent } from './programme-edit.component';

describe('ProgrammeEditComponent', () => {
  let component: ProgrammeEditComponent;
  let fixture: ComponentFixture<ProgrammeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
