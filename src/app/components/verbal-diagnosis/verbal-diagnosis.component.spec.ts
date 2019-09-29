import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbalDiagnosisComponent } from './verbal-diagnosis.component';

describe('VerbalDiagnosisComponent', () => {
  let component: VerbalDiagnosisComponent;
  let fixture: ComponentFixture<VerbalDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbalDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbalDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
