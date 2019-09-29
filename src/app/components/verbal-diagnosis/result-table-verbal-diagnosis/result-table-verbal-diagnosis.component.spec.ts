import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTableVerbalDiagnosisComponent } from './result-table-verbal-diagnosis.component';

describe('ResultTableVerbalDiagnosisComponent', () => {
  let component: ResultTableVerbalDiagnosisComponent;
  let fixture: ComponentFixture<ResultTableVerbalDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTableVerbalDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTableVerbalDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
