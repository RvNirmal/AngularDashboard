import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChartComponent } from './sub-chart.component';

describe('SubChartComponent', () => {
  let component: SubChartComponent;
  let fixture: ComponentFixture<SubChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
