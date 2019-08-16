import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteLoaderComponent } from './activite-loader.component';

describe('ActiviteLoaderComponent', () => {
  let component: ActiviteLoaderComponent;
  let fixture: ComponentFixture<ActiviteLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
