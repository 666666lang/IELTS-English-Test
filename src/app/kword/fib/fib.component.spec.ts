import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibComponent } from './fib.component';

describe('FibComponent', () => {
  let component: FibComponent;
  let fixture: ComponentFixture<FibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
