import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsRegisterComponent } from './cs-register.component';

describe('CsRegisterComponent', () => {
  let component: CsRegisterComponent;
  let fixture: ComponentFixture<CsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
