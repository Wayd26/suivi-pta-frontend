import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSourceFinancementAddComponent } from './type-source-financement-add.component';

describe('TypeSourceFinancementAddComponent', () => {
  let component: TypeSourceFinancementAddComponent;
  let fixture: ComponentFixture<TypeSourceFinancementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSourceFinancementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSourceFinancementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
