import { Component, OnInit, ViewChild } from '@angular/core';
import { TextAnalysisService, IWord, IFrequency } from '../../services/text-analysis.service';
import { SpeechRecognitionService } from '@kamiazya/ngx-speech-recognition';
import { MatRipple, MatTableDataSource, MatChipInputEvent, MatPaginator } from '@angular/material';
import { timer, Subscription, BehaviorSubject } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import 'echarts';
import 'echarts-wordcloud';
import 'sentiment';
import * as dateFormat from 'dateformat';
import { AngularFirestore } from '@angular/fire/firestore';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { symptomIDToName, issueData } from 'src/app/services/diagnose.service';
import { distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-lang-complexity',
  templateUrl: './lang-complexity.component.html',
  styleUrls: ['./lang-complexity.component.scss']
})




export class LangComplexityComponent implements OnInit {
  @ViewChild(MatRipple, {static: true}) 
    ripple: MatRipple;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  symptomIDToNameTranslation = symptomIDToName;
  issues: any[];


  doctorSpeaking: boolean;
  totalDoctorTime: number;
  totalPatientTime: number;
  hcpTranscript = {};
  patientTranscript = {};
  timeElapsed: number;
  displayedColumns: string[] = ['InfrequentTerm', 'frequency', 'definition', 'pos', 'alternatives'];
  displayedColumnsDiagnosis: string[] = ['ID', 'Name', 'SymptomList'];
  pageSizes = [10, 25, 50, 100];
  infrequentDataSource: MatTableDataSource<any>;
  diagnosisDataSource: MatTableDataSource<any>;
  timerSubscriber: Subscription
  screenSize = window.innerWidth;
  grammarsList;
  finished = false;
  wordsUntilPoint = [0, 0];
  histogramFrequencies: {};
  wordsPerMinute: {};
  percentTalkingPie = {};
  wordData = [];
  words = {};
  requestList = [];
  infrequentWords: IFrequency[] = [];
  yMax = 500;
  dataShadow = [];
  startTime = Date.now();
  statements = [];
  statementObj = {};


  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  ctrlGroup: FormGroup;
  symptoms = new BehaviorSubject<string[]>([]);
  symptoms$ = this.symptoms.asObservable();




  partOfSpeechDict = {
    'n': 'noun',
    'v': 'verb',
    'adj': 'adjective',
    'adv': 'adverb',
     'u': 'undetermined'
  }

  actionMap = {
    'opacity': 'initiating blood work processes',
    'healing': 'ordering vaccination',
    'create': 'drawing up prescription',
  }


  constructor(
    private textAnalysisService: TextAnalysisService,
    private spTxt: SpeechRecognitionService,
    private alertSnack: MatSnackBar,
    private db: AngularFirestore) { 
    this.infrequentDataSource = new MatTableDataSource(this.infrequentWords);
    this.wordsPerMinute = {
        legend: {},
        tooltip: {
          trigger: 'axis',
        },
        dataset: {
          source: {
            timestamp: [],
            doctor_WPM: [],
            patient_WPM: [],
          }
        },
        xAxis: { type: 'category' },
        yAxis: { },
        series: [
          { type: 'line'},
          { type: 'line'},
        ],
      };


    this.percentTalkingPie = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ms ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['doctor speaking','patient speaking','silence']
        },
        series: [
            {
                name:'Relative speaking times',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[]
            }
        ]
    };



      this.histogramFrequencies =  {
        series: [{
          type: 'wordCloud',
  
          shape: 'circle',
  
          left: 'center',
          top: 'center',
          width: '70%',
          height: '80%',
          right: null,
          bottom: null,
          sizeRange: [12, 60],
  
          rotationRange: [-90, 90],
          rotationStep: 45,
          gridSize: 8,
          drawOutOfBound: false,
          data: []
      }]
    };
    this.issues = Object.values(issueData);
    this.diagnosisDataSource = new MatTableDataSource(this.issues);
    this.ctrlGroup = new FormGroup({
      symptoms: new FormControl([], [Validators.email, Validators.required]),
    });
      spTxt.start();
      const source = timer(5000, 5000);
      this.timerSubscriber = source.subscribe(val => {
        console.log(Date.now());
        const doctorWords = Object.values(this.textAnalysisService.wordList).filter((val: any) => val.isDoctor);
        const patientWords = Object.values(this.textAnalysisService.wordList).filter((val: any) => !val.isDoctor);
        console.log(patientWords);
        (this.wordsPerMinute as any).dataset.source.timestamp.push(dateFormat(Date.now(), "h:MM:ss TT"));
        console.log((patientWords.length - this.wordsUntilPoint[0] )* 12);
        console.log((doctorWords.length - this.wordsUntilPoint[0] )* 12);

        (this.wordsPerMinute as any).dataset.source.doctor_WPM.push((doctorWords.length - this.wordsUntilPoint[0] )* 12 );
        (this.wordsPerMinute as any).dataset.source.patient_WPM.push((patientWords.length - this.wordsUntilPoint[1] )* 12 );
        this.wordsUntilPoint[0] = doctorWords.length;
        this.wordsUntilPoint[1] = patientWords.length;
        
      });

      spTxt.onspeechend = _ => {
        console.log("speech end");
      }

      spTxt.onaudioend = _ => {
        console.log('audio end');
      }

      spTxt.onsoundend = _ => {
        console.log('sound end');
      }
      spTxt.onresult = s => {
        this.ripple.launch({centered: true, radius: 0});
        
        const resultList: SpeechRecognitionResultList = s.results;
        // console.log(resultList);
        if (resultList.item(s.resultIndex).item(0).confidence >= 0.8 ) {
          const newPhrase = `${resultList.item(s.resultIndex).item(0).transcript}`.toLowerCase().trim();
          console.log(newPhrase);
          console.log(s.resultIndex);
          if (s.resultIndex % 2 !== 1) {
            this.doctorSpeaking = true;
            if (s.resultIndex > 0) {
              if (this.patientTranscript[s.resultIndex - 1]) {
                this.hcpTranscript[s.resultIndex] = {
                  phrase: newPhrase,
                  time: Date.now() - this.startTime - this.patientTranscript[s.resultIndex - 1].time,
                };
              }
              this.hcpTranscript[s.resultIndex] = {
                phrase: newPhrase,
                time: Date.now() - this.startTime,
              };
              
            }
            this.hcpTranscript[s.resultIndex] = {
              phrase: newPhrase,
              time: Date.now() - this.startTime,
            };
            console.log(`new doctor transcript:`);
            console.log(this.hcpTranscript);
          } else {
            this.doctorSpeaking = false;
            if (this.hcpTranscript[s.resultIndex - 1]) {
              this.patientTranscript[s.resultIndex] = {
                phrase: newPhrase,
                time: Date.now() - this.startTime - this.hcpTranscript[s.resultIndex - 1].time,
              };
            } else {
              this.patientTranscript[s.resultIndex] = {
                phrase: newPhrase,
                time: Date.now() - this.startTime,
              };
            }
            console.log('new patient transcript:');
            console.log(this.patientTranscript);

          }
          const actions = this.screenForActionWords(newPhrase);
          if (actions.length > 0) {
            this.alertSnack.open(this.actionMap[actions], 'Undo', {
              duration: 3000
            });
          }
          this.statementObj[s.resultIndex] =  {speaker: this.doctorSpeaking ? 'doctor': 'patient', text: newPhrase, action: actions.length > 0 ? actions : ''}
          this.statements = Object.values(this.statementObj);
          if (newPhrase.indexOf(' ') !== -1) {

            Object.values(symptomIDToName).some(word => {
              if (newPhrase.includes(word) && !this.symptoms.value.includes(word)) {
                this.selectSymptom(word);
              }
            })
            const newWords = newPhrase.split(' ');
            newWords.map(word => {
              if (this.words[word]) {
                this.words[word]++;
              } else {
                this.words[word] = 1;
              }
            })
            this.textAnalysisService.getWordFrequency(newPhrase.split(' '), this.doctorSpeaking).subscribe(r => {
              // console.log(r);
              r.map((_, i) => {
                const wordResult = r[i][0]['word'];
                const freq = Number(r[i][0]['tags'][0].substr(2, r[i][0]['tags'][0].length - 1));
                this.textAnalysisService.wordList[r[i][0]['word']]['usageFreq'] = freq;
                if (freq < 1 ) {
                  const nlpData = r[i][0]['defs'][0].split('\t');
                  const thisPos = nlpData[0];
                  const def = nlpData[1];
                  // console.log(def);
                  this.textAnalysisService.getSimplerWord(wordResult).subscribe(synResul => {
                    this.infrequentWords.push({
                      infrequentTerm: wordResult,
                      frequency: freq,
                      definition: def,
                      pos: this.partOfSpeechDict[thisPos],
                      alternatives: this.parseMeaningLikeResult(synResul).map(word => word.word)
                    });
                  });
                  this.infrequentDataSource.data = this.infrequentWords;
                }
              });
              
            });
          } else {
            if (Object.values(symptomIDToName).includes(newPhrase) && !this.symptoms.value.includes(newPhrase)) {
              this.selectSymptom(newPhrase);
            }
            this.words[newPhrase] = 1;
            this.textAnalysisService.getWordFrequency([newPhrase], this.doctorSpeaking).subscribe(r => {
              // console.log(r);
              const freq =  Number(r[0][0]['tags'][0].substr(2, r[0][0]['tags'][0].length - 1));
              const currentWord = r[0][0]['word'];
              const nlpData = r[0][0]['defs'][0].split('\t');
              const thisPos = nlpData[0];
              const def = nlpData[1];
              this.textAnalysisService.wordList[currentWord]['usageFreq'] = Number(r[0][0]['tags'][0].substr(2, r[0][0]['tags'][0].length - 1));
              if (freq < 0.5 ) {
                this.textAnalysisService.getSimplerWord(currentWord).subscribe(synResul => {
                  this.infrequentWords.push({
                    infrequentTerm: currentWord,
                    frequency: freq,
                    definition: def,
                    pos: this.partOfSpeechDict[thisPos],
                    alternatives: this.parseMeaningLikeResult(synResul).map(word => word.word)
                  });
                  this.infrequentDataSource.data = this.infrequentWords;
                });
                 
              }
            });
          }
          this.histogramFrequencies['series'][0].data = [];
          Object.values(this.textAnalysisService.wordList).map((word: IWord) => {
              if (word.sentiment !== 0) {
                this.histogramFrequencies['series'][0].data.push({
                  name: word.text,
                  value: word.frequency,
                  // value: Number(words[0].tags[0].substr(2, words[0].tags[0].length - 1)),
                  // Style of single text
                  textStyle: {
                      normal: {
                        color: (word.sentiment > 0) ? 'green': 'red'
                      },
                      emphasis: {}
                  }

                });
              }
        })

      }
    };
    
  
      spTxt.onend = _ => {
        console.log('ended here');
        if (!this.finished) {
          spTxt.start();
        }
        this.timerSubscriber.unsubscribe();
      }
    }

  ngOnInit() {

    window.onresize = () => {
      this.screenSize = window.innerWidth;
    }

    this.diagnosisDataSource.paginator = this.paginator;

    this.ctrlGroup.get('symptoms').valueChanges.pipe(
      distinctUntilChanged()
    ).subscribe(() => {
      if (this.symptoms.value.length === 0) {
        this.diagnosisDataSource.data = this.issues;
      } else {
        this.diagnosisDataSource.data = this.issues.filter(d => this.symptoms.value.some(e => d.symptomList.includes(e)));
      }
    });
    
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

  getAverageWPM(arr: number[]): number {
    if (arr.length > 1) {
      return arr.reduce((a,b) => a += b) / arr.length;
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      return 0;
    }
  }



  finishRecording(): void {
    this.calculatePercentSpeakingTimes();
    this.finished = true;
    this.db.collection('conversationData').add({
      'patientTranscript': Object.values(this.patientTranscript).map(v => v['phrase']).join(' '),
      'doctorTranscript': Object.values(this.hcpTranscript).map(v => v['phrase']).join(' '),
      'percentDoctorSpeaking': this.totalDoctorTime / (this.totalDoctorTime + this.totalPatientTime),
      'averageDoctorWPM': this.getAverageWPM((this.wordsPerMinute as any).dataset.source.doctor_WPM),
      'averagePatientWPM': this.getAverageWPM((this.wordsPerMinute as any).dataset.source.patient_WPM),
      'infrequentWords': this.infrequentWords,
    })
    this.spTxt.stop();
  }


  parseMeaningLikeResult(result) {
    
    // result.sort((a, b) => Number(b['tags'][b['tags'].length - 1].split(':')[1]) - Number(a['tags'][a['tags'].length - 1].split(':')[1]));
    result.sort((a,b) => b.score - a.score);
    console.log(result);
    const topFive = result.slice(0, 5);
    topFive.sort((a, b) => Number(b['tags'][b['tags'].length - 1].split(':')[1]) - Number(a['tags'][a['tags'].length - 1].split(':')[1]));
    return topFive;
  }


  screenForActionWords(phrase: string): string {
    if (!(phrase.includes('no') || phrase.includes('not'))) {
      if (phrase.includes('blood')) {
        if (phrase.includes('work') || phrase.includes('test') || phrase.includes('exam') || phrase.includes('analysis')) {
          return 'opacity';
        }
      }

      if (phrase.includes('vaccine') || phrase.includes('innoculation')) {
        return 'healing';
      }

      if (phrase.includes('prescription') || phrase.includes('script')) {
        return 'create';
      }
      return '';

    }
    return '';
    
  }


  calculatePercentSpeakingTimes() {
    this.totalDoctorTime = 0;
    this.totalPatientTime = 0;
    Object.values(this.hcpTranscript).map((v: any) => {
      this.totalDoctorTime += v.time;
    });
    Object.values(this.patientTranscript).map((v: any) => {
      this.totalPatientTime += v.time;
    });

    this.percentTalkingPie['series'][0].data = [
      {value: this.totalDoctorTime, name: 'doctor speaking'},
      {value: this.totalPatientTime, name: 'patient speaking'},
    ];
  }



}
