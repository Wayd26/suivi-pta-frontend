import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteLocalisationComponent } from './activite-localisation.component';

describe('ActiviteLocalisationComponent', () => {
  let component: ActiviteLocalisationComponent;
  let fixture: ComponentFixture<ActiviteLocalisationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteLocalisationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
