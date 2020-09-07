import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceImportComponent } from './source-import.component';

describe('SourceImportComponent', () => {
  let component: SourceImportComponent;
  let fixture: ComponentFixture<SourceImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
