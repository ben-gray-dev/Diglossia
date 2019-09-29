import { Component, OnInit, ViewChild } from '@angular/core';
import { symptomIDToName, issueData } from 'src/app/services/diagnose.service';
import { MatTableDataSource, MatPaginator, MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription, BehaviorSubject } from 'rxjs';
import { RxSpeechRecognitionService, resultList, SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { distinctUntilChanged, filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-result-table-verbal-diagnosis',
  templateUrl: './result-table-verbal-diagnosis.component.html',
  styleUrls: ['./result-table-verbal-diagnosis.component.scss']
})
export class ResultTableVerbalDiagnosisComponent implements OnInit {
  symptomIDToNameTranslation = symptomIDToName;
  issues: any[];
  dataSource: MatTableDataSource<any>;
  
  displayedColumns: string[] = ['ID', 'Name', 'SymptomList'];
  pageSizes = [10, 25, 50, 100];
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  ctrlGroup: FormGroup;
  symptoms = new BehaviorSubject<string[]>([]);
  symptoms$ = this.symptoms.asObservable();
  speechToTextSub: Subscription;
  message = '';

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  constructor(private spTxt: SpeechRecognitionService) {
    this.issues = Object.values(issueData);
    this.dataSource = new MatTableDataSource(this.issues);
    this.ctrlGroup = new FormGroup({
      symptoms: new FormControl([], [Validators.email, Validators.required]),
    });

    spTxt.start();

    spTxt.onresult = s => {
      const resultList: SpeechRecognitionResultList = s.results;
      const newPhrase = `${resultList.item(resultList.length - 1).item(0).transcript}`.toLowerCase().trim();
      if (newPhrase.indexOf(' ') !== -1) {
        Object.values(symptomIDToName).some(word => {
          if (newPhrase.includes(word) && !this.symptoms.value.includes(word)) {
            this.selectSymptom(word);
          }
        })
      } else {
        if (Object.values(symptomIDToName).includes(newPhrase) && !this.symptoms.value.includes(newPhrase)) {
          this.selectSymptom(newPhrase);
        }
      }
    };

    spTxt.onend = _ => {
      spTxt.start();
    }
  }
  
  selectSymptom(symptom: string) {
    const symCtrl = this.ctrlGroup.get('symptoms');
    this.symptoms.next([...this.symptoms.value, symptom]);
    symCtrl.patchValue([...symCtrl.value, symptom]);
  }

  selectSymptomClick(event): void {
  
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add symptom
    if ((value || '').trim()) {
      this.selectSymptom(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    
  }

  remove(symptom: string): void {
    const index = this.symptoms.value.indexOf(symptom);

    if (index >= 0) {
      this.symptoms.value.splice(index, 1);
      this.ctrlGroup.get('symptoms').patchValue([...this.symptoms.value]);
    }
    
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.ctrlGroup.get('symptoms').valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(() => {
      if (this.symptoms.value.length === 0) {
        this.dataSource.data = this.issues;
      } else {
        this.dataSource.data = this.issues.filter(d => this.symptoms.value.some(e => d.symptomList.includes(e)));
      }
    });
  }

}