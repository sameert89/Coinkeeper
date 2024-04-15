import { TextFieldModule } from '@angular/cdk/text-field';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
    MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef,
    MatDialogTitle
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { SpeechRecognitionService } from '../../data-access/speech-recognition.service';

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
    TextFieldModule,
  ],
  templateUrl: './speech-input-dialog.component.html',
  styleUrl: './speech-input-dialog.component.scss',
})
export class SpeechInputDialogComponent {
  public isUserSpeaking: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<SpeechInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public speechText: string,
    private speechRecognitionService: SpeechRecognitionService
  ) {
    speechText = '';
  }
  ngOnInit(): void {
    this.initVoiceInput();
  }

  /**
   * @description Function to stop recording.
   */
  stopRecording() {
    this.speechRecognitionService.stop();
    this.isUserSpeaking = false;
  }

  /**
   * @description Function for initializing voice input so user can chat with machine.
   */
  initVoiceInput() {
    // Subscription for initializing and this will call when user stopped speaking.
    this.speechRecognitionService.init();
    this.speechRecognitionService.speechPaused().subscribe(() => {
      // User has stopped recording
      // Do whatever when mic finished listening
      // console.log('User Stoppend Speaking');
    });

    // Subscription to detect user input from voice to text.
    this.speechRecognitionService.speechInput().subscribe((input) => {
      // Set voice text output to
      this.speechText = input;
    });
  }

  /**
   * @description Function to enable voice input.
   */
  startRecording() {
    this.isUserSpeaking = true;
    this.speechRecognitionService.start();
    this.speechText = '';
  }
}

export interface DialogData {
  voiceData: string;
}
