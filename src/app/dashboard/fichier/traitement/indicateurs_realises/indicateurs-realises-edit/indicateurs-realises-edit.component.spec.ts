import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateursRealisesEditComponent } from './indicateurs-realises-edit.component';

describe('IndicateursRealisesEditComponent', () => {
  let component: IndicateursRealisesEditComponent;
  let fixture: ComponentFixture<IndicateursRealisesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicateursRealisesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicateursRealisesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
