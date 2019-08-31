import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPtaLoaderComponent } from './suivi-pta-loader.component';

describe('SuiviPtaLoaderComponent', () => {
  let component: SuiviPtaLoaderComponent;
  let fixture: ComponentFixture<SuiviPtaLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviPtaLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviPtaLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
