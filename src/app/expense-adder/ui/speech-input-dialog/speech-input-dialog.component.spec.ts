import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechInputDialogComponent } from './speech-input-dialog.component';

describe('SpeechInputDialogComponent', () => {
  let component: SpeechInputDialogComponent;
  let fixture: ComponentFixture<SpeechInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeechInputDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpeechInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
