import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureLoaderComponent } from './structure-loader.component';

describe('StructureLoaderComponent', () => {
  let component: StructureLoaderComponent;
  let fixture: ComponentFixture<StructureLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
