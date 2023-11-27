import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwordDetailComponent } from './kword-detail.component';

describe('KwordDetailComponent', () => {
  let component: KwordDetailComponent;
  let fixture: ComponentFixture<KwordDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KwordDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KwordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
