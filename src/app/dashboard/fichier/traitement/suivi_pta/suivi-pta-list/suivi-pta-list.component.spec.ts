import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPtaListComponent } from './suivi-pta-list.component';

describe('SuiviPtaListComponent', () => {
  let component: SuiviPtaListComponent;
  let fixture: ComponentFixture<SuiviPtaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviPtaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviPtaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
