import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateursRealisesListComponent } from './indicateurs-realises-list.component';

describe('IndicateursRealisesListComponent', () => {
  let component: IndicateursRealisesListComponent;
  let fixture: ComponentFixture<IndicateursRealisesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicateursRealisesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicateursRealisesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
