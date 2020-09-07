import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheParPeriodeComponent } from './tache-par-periode.component';

describe('TacheParPeriodeComponent', () => {
  let component: TacheParPeriodeComponent;
  let fixture: ComponentFixture<TacheParPeriodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheParPeriodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheParPeriodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
