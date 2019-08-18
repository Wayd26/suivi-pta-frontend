import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionLoaderComponent } from './action-loader.component';

describe('ActionLoaderComponent', () => {
  let component: ActionLoaderComponent;
  let fixture: ComponentFixture<ActionLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
