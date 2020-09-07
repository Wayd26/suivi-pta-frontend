import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TepProgrammeComponent } from './tep-programme.component';

describe('TepProgrammeComponent', () => {
  let component: TepProgrammeComponent;
  let fixture: ComponentFixture<TepProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TepProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TepProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
