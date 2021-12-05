import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsNewTodoComponent } from './cs-new-todo.component';

describe('CsNewTodoComponent', () => {
  let component: CsNewTodoComponent;
  let fixture: ComponentFixture<CsNewTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsNewTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsNewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
