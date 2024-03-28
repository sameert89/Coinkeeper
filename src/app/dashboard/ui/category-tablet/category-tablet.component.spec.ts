import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTabletComponent } from './category-tablet.component';

describe('CategoryTabletComponent', () => {
  let component: CategoryTabletComponent;
  let fixture: ComponentFixture<CategoryTabletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryTabletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryTabletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
