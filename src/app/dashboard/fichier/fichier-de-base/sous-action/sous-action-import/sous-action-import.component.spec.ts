import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousActionImportComponent } from './sous-action-import.component';

describe('SousActionImportComponent', () => {
  let component: SousActionImportComponent;
  let fixture: ComponentFixture<SousActionImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousActionImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousActionImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
