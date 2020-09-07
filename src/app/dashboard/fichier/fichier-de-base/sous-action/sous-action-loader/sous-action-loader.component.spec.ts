import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousActionLoaderComponent } from './sous-action-loader.component';

describe('SousActionLoaderComponent', () => {
  let component: SousActionLoaderComponent;
  let fixture: ComponentFixture<SousActionLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousActionLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousActionLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
