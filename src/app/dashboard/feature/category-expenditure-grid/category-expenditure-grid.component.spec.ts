import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryExpenditureGridComponent } from './category-expenditure-grid.component';

describe('CategoryExpenditureGridComponent', () => {
  let component: CategoryExpenditureGridComponent;
  let fixture: ComponentFixture<CategoryExpenditureGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryExpenditureGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryExpenditureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
