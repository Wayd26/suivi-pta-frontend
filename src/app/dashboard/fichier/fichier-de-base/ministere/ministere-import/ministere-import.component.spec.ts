import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistereImportComponent } from './ministere-import.component';

describe('MinistereImportComponent', () => {
  let component: MinistereImportComponent;
  let fixture: ComponentFixture<MinistereImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistereImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistereImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
