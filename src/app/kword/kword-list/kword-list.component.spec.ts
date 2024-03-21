import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KwordListComponent } from './kword-list.component';

describe('KwordListComponent', () => {
  let component: KwordListComponent;
  let fixture: ComponentFixture<KwordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KwordListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KwordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
