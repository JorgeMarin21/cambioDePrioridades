import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IteracionProcesoComponent } from './iteracion-proceso.component';

describe('IteracionProcesoComponent', () => {
  let component: IteracionProcesoComponent;
  let fixture: ComponentFixture<IteracionProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IteracionProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IteracionProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
