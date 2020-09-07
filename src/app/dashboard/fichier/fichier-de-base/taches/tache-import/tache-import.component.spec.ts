import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheImportComponent } from './tache-import.component';

describe('TacheImportComponent', () => {
  let component: TacheImportComponent;
  let fixture: ComponentFixture<TacheImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
