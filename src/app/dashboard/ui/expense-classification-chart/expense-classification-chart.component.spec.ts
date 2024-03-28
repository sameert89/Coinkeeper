import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseClassificationChartComponent } from './expense-classification-chart.component';

describe('ExpenseClassificationChartComponent', () => {
  let component: ExpenseClassificationChartComponent;
  let fixture: ComponentFixture<ExpenseClassificationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseClassificationChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpenseClassificationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
