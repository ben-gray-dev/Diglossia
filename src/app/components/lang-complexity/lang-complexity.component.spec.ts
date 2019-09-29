import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangComplexityComponent } from './lang-complexity.component';

describe('LangComplexityComponent', () => {
  let component: LangComplexityComponent;
  let fixture: ComponentFixture<LangComplexityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangComplexityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangComplexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
