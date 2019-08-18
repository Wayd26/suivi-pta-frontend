import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinistereLoaderComponent } from './ministere-loader.component';

describe('MinistereLoaderComponent', () => {
  let component: MinistereLoaderComponent;
  let fixture: ComponentFixture<MinistereLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinistereLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinistereLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
