import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SpeechRecognitionService } from '../../../data-access/speech-recognition.service';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-speech-input-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
  ],
  templateUrl: './speech-input-dialog.component.html',
  styleUrl: './speech-input-dialog.component.scss',
})
export class SpeechInputDialogComponent {
  speechText = '';
  textSubscription!: Subscription;
  constructor(
    public dialogRef: MatDialogRef<SpeechInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private speechRecognitionService: SpeechRecognitionService
  ) {
    this.speechRecognitionService.init();
  }
  ngOnInit() {
    this.textSubscription = this.speechRecognitionService.currentText.subscribe(
      (text) => {
        this.speechText = text;
      }
    );
  }

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.textSubscription.unsubscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.speechRecognitionService.stop();
  }
  startSpeechRecognition(): void {
    this.speechRecognitionService.start();
  }
  handleSubmit(): void {
    this.speechRecognitionService.stop();
  }
}

export interface DialogData {
  voiceData: string;
}
