import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPtaEditComponent } from './suivi-pta-edit.component';

describe('SuiviPtaEditComponent', () => {
  let component: SuiviPtaEditComponent;
  let fixture: ComponentFixture<SuiviPtaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviPtaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviPtaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
