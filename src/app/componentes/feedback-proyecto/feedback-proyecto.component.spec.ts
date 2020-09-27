import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackProyectoComponent } from './feedback-proyecto.component';

describe('FeedbackProyectoComponent', () => {
  let component: FeedbackProyectoComponent;
  let fixture: ComponentFixture<FeedbackProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
