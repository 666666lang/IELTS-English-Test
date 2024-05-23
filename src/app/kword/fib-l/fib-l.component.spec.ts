import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibLComponent } from './fib-l.component';

describe('FibLComponent', () => {
  let component: FibLComponent;
  let fixture: ComponentFixture<FibLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
