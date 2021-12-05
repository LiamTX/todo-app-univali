import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsSpinnerComponent } from './cs-spinner.component';

describe('CsSpinnerComponent', () => {
  let component: CsSpinnerComponent;
  let fixture: ComponentFixture<CsSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
