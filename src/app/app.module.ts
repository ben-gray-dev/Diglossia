import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechRecognitionModule, RxSpeechRecognitionService, SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule, MatInputModule, MatFormFieldModule, MatCardMdImage, MatCardModule, MatButtonModule, MatDividerModule, MatListModule, MatTableModule, MatPaginatorModule, MatChipsModule, MatRippleModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { CountDown } from './components/countdown/countdown.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { VerbalDiagnosisComponent } from './components/verbal-diagnosis/verbal-diagnosis.component';
import { NoResultsVerbalDiagnosisComponent } from './components/verbal-diagnosis/no-results-verbal-diagnosis/no-results-verbal-diagnosis.component';
import { ResultTableVerbalDiagnosisComponent } from './components/verbal-diagnosis/result-table-verbal-diagnosis/result-table-verbal-diagnosis.component';
import { LangComplexityComponent } from './components/lang-complexity/lang-complexity.component';
import { HttpClientModule } from '@angular/common/http';
import { ListenerComponent } from './components/lang-complexity/listener/listener.component';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    CountDown,
    LandingPageComponent,
    VerbalDiagnosisComponent,
    NoResultsVerbalDiagnosisComponent,
    ResultTableVerbalDiagnosisComponent,
    LangComplexityComponent,
    ListenerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatCarouselModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatRippleModule,
    CovalentBaseEchartsModule,
    CovalentBarEchartsModule,
    CovalentTooltipEchartsModule,

    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    SpeechRecognitionModule.withConfig({
      lang: 'en-US',
      interimResults: true,
      maxAlternatives: 10,
      continuous: true,
    }),
  ],
  providers: [ RxSpeechRecognitionService, SpeechRecognitionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
