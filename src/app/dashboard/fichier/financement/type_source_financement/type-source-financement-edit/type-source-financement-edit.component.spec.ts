import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSourceFinancementEditComponent } from './type-source-financement-edit.component';

describe('TypeSourceFinancementEditComponent', () => {
  let component: TypeSourceFinancementEditComponent;
  let fixture: ComponentFixture<TypeSourceFinancementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSourceFinancementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSourceFinancementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
