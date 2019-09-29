import { Component, OnInit } from '@angular/core';
import { RxSpeechRecognitionService, SpeechRecognitionService, resultList } from '@kamiazya/ngx-speech-recognition';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime, take, first } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { trigger, transition, style, animate, group, query } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  showMenu(): void {

  }
}
