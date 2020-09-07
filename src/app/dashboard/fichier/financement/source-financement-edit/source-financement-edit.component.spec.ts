import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceFinancementEditComponent } from './source-financement-edit.component';

describe('SourceFinancementEditComponent', () => {
  let component: SourceFinancementEditComponent;
  let fixture: ComponentFixture<SourceFinancementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceFinancementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceFinancementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
