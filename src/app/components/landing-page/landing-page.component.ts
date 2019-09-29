import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RxSpeechRecognitionService, resultList } from '@kamiazya/ngx-speech-recognition';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ])
    ]),
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(20%)'}),
        animate('100ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class LandingPageComponent {

  emailNotSubmitted = true;
  emailAreadyUsed = false;
  title = 'diglossia';
  message = '';
  listening = false;
  speechToTextSub: Subscription;
  ctrlGroup: FormGroup;
  constructor(private speechTotextService: RxSpeechRecognitionService, private db: AngularFirestore) {
    this.ctrlGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
  }

  listen() {
    if (this.listening) {
      this.listening = false;
      this.speechToTextSub.unsubscribe();
    }
    else {
      this.listening = true;
      this.speechToTextSub = this.speechTotextService
        .listen()
        .pipe(resultList)
        .subscribe((list: SpeechRecognitionResultList) => {
          this.message = '';
          for (let itemIndex in [...Array(list.length).keys()]) {
            this.message = `${this.message} ${list.item(Number(itemIndex)).item(0).transcript}`;
          }
        });
      }
  }

  submitEmail() {
    let currentEmails = [];
    if (this.ctrlGroup.status === 'VALID') {
      this.emailAreadyUsed = false;
      this.db.collection('emails').snapshotChanges().pipe(
        first()).subscribe(emails => {
        currentEmails = emails.map(email => email.payload.doc.data());
        currentEmails = currentEmails.map(email => email.emailString);
        if (currentEmails.indexOf(this.ctrlGroup.get('email').value) === -1) {
          this.emailNotSubmitted = false;
          this.db.collection('emails').add({'emailString': this.ctrlGroup.get('email').value});
        } else {
          this.emailAreadyUsed = true;
        }
      });
      
    }
    
    
    
  }

}
