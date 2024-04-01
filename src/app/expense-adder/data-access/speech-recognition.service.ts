import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class SpeechRecognitionService {
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  private textSource = new BehaviorSubject<string>('');
  currentText = this.textSource.asObservable();
  public text = '';
  tempWords: any;
  transcript_arr: string[] = [];
  confidence_arr: string[] = [];
  isStarted = false; //<< this Flag to check if the user stop the service
  isStoppedAutomatically = true; //<< this Flag to check if the service stopped automaticically.
  constructor() {}

  init() {
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-IN';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.transcript_arr.push(transcript);
      this.tempWords = transcript;
      this.textSource.next(this.text + ' ' + this.tempWords);
      console.log(this.transcript_arr);

      const confidence = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.confidence)
        .join('');
      this.confidence_arr.push(confidence);
      console.log(this.confidence_arr);
    });

    this.recognition.addEventListener('end', (condition: any) => {
      this.wordConcat();
      if (this.isStoppedAutomatically) {
        this.recognition.stop();
        console.log('stopped automatically!!');
        this.recognition.start();
        console.log('started automatically!!');
        this.isStoppedAutomatically = true;
      }
    });
  }

  start() {
    if (!this.isStarted) {
      this.recognition.start();
      this.isStarted = true;
      console.log('Speech recognition started');
    }
    return true;
  }
  stop() {
    if (this.isStarted) {
      this.isStoppedAutomatically = false;
      this.wordConcat();
      this.recognition.stop();
      this.isStarted = false;
      console.log('End speech recognition by user');
    }
    return false;
  }

  wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }
}