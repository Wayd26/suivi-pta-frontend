import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VilleLoaderComponent } from './ville-loader.component';

describe('VilleLoaderComponent', () => {
  let component: VilleLoaderComponent;
  let fixture: ComponentFixture<VilleLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VilleLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VilleLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
