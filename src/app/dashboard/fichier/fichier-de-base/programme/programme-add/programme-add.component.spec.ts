import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeAddComponent } from './programme-add.component';

describe('ProgrammeAddComponent', () => {
  let component: ProgrammeAddComponent;
  let fixture: ComponentFixture<ProgrammeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
