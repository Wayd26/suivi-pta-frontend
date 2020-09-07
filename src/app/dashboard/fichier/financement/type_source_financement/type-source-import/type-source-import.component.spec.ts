import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSourceImportComponent } from './type-source-import.component';

describe('TypeSourceImportComponent', () => {
  let component: TypeSourceImportComponent;
  let fixture: ComponentFixture<TypeSourceImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSourceImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSourceImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
