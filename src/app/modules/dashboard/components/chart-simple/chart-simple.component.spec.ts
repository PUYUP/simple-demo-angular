import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSimpleComponent } from './chart-simple.component';

describe('ChartSimpleComponent', () => {
  let component: ChartSimpleComponent;
  let fixture: ComponentFixture<ChartSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
