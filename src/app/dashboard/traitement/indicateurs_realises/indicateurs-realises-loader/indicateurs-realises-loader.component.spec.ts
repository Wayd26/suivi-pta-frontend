import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicateursRealisesLoaderComponent } from './indicateurs-realises-loader.component';

describe('IndicateursRealisesLoaderComponent', () => {
  let component: IndicateursRealisesLoaderComponent;
  let fixture: ComponentFixture<IndicateursRealisesLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicateursRealisesLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicateursRealisesLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
