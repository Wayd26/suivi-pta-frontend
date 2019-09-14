import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatLoaderComponent } from './resultat-loader.component';

describe('ResultatLoaderComponent', () => {
  let component: ResultatLoaderComponent;
  let fixture: ComponentFixture<ResultatLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
