import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUri } from '../../shared/utils/constants';

@Injectable({
  providedIn: 'root',
})
export class SpeechDataInterpreterWebService {
  constructor(private http: HttpClient) {}
  interpretData(speechText: string) {
    return this.http.post<any>(
      apiUri + 'chatbot/decode',
      {
        voiceTranscription: speechText,
      },
      {
        withCredentials: true,
      }
    );
  }
}
