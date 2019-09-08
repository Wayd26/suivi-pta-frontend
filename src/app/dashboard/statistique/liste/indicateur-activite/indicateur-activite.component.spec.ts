import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateurActiviteComponent } from './indicateur-activite.component';

describe('IndicateurActiviteComponent', () => {
  let component: IndicateurActiviteComponent;
  let fixture: ComponentFixture<IndicateurActiviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicateurActiviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicateurActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
