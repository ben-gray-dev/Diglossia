import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResultsVerbalDiagnosisComponent } from './no-results-verbal-diagnosis.component';

describe('NoResultsVerbalDiagnosisComponent', () => {
  let component: NoResultsVerbalDiagnosisComponent;
  let fixture: ComponentFixture<NoResultsVerbalDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoResultsVerbalDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResultsVerbalDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
