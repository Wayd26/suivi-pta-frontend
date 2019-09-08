import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleImportComponent } from './ville-import.component';

describe('VilleImportComponent', () => {
  let component: VilleImportComponent;
  let fixture: ComponentFixture<VilleImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
