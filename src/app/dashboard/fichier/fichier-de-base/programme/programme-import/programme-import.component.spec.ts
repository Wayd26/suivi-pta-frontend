import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeImportComponent } from './programme-import.component';

describe('ProgrammeImportComponent', () => {
  let component: ProgrammeImportComponent;
  let fixture: ComponentFixture<ProgrammeImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
