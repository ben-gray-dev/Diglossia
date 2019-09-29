import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ResultTableVerbalDiagnosisComponent } from './result-table-verbal-diagnosis/result-table-verbal-diagnosis.component';
import { BehaviorSubject } from 'rxjs';

export interface ISymptom {
  ID: string;
  Name: string;
}

@Component({
  selector: 'app-verbal-diagnosis',
  templateUrl: './verbal-diagnosis.component.html',
  styleUrls: ['./verbal-diagnosis.component.scss']
})

export class VerbalDiagnosisComponent implements AfterViewInit {
  symptomsSpoken = new BehaviorSubject<boolean>(false);
  symptomsSpoken$ = this.symptomsSpoken.asObservable();


  @ViewChild('ResultTable', {static: false})
  resultTable: ResultTableVerbalDiagnosisComponent;

  constructor() {
  }

  ngAfterViewInit() {
    this.resultTable.symptoms$.subscribe(symptoms => {
      this.symptomsSpoken.next(symptoms.length !== 0);
    });
  }
}
