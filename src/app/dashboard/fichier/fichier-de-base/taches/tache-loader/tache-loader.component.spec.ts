import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TacheLoaderComponent } from './tache-loader.component';

describe('TacheLoaderComponent', () => {
  let component: TacheLoaderComponent;
  let fixture: ComponentFixture<TacheLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
