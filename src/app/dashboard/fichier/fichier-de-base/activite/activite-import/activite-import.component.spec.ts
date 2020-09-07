import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteImportComponent } from './activite-import.component';

describe('ActiviteImportComponent', () => {
  let component: ActiviteImportComponent;
  let fixture: ComponentFixture<ActiviteImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
