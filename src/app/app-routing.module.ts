import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountDown } from './components/countdown/countdown.component';
import { VerbalDiagnosisComponent } from './components/verbal-diagnosis/verbal-diagnosis.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LangComplexityComponent } from './components/lang-complexity/lang-complexity.component';


const routes: Routes = [
  { path: 'verbal-diagnosis', component: VerbalDiagnosisComponent },
  { path: 'lang-complexity', component: LangComplexityComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: '**', redirectTo: 'landing' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
