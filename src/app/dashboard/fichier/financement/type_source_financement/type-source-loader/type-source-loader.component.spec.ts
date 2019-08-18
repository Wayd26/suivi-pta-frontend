import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSourceLoaderComponent } from './type-source-loader.component';

describe('TypeSourceLoaderComponent', () => {
  let component: TypeSourceLoaderComponent;
  let fixture: ComponentFixture<TypeSourceLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSourceLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSourceLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
