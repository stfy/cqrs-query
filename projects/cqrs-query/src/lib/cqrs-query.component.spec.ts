import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqrsQueryComponent } from './cqrs-query.component';

describe('CqrsQueryComponent', () => {
  let component: CqrsQueryComponent;
  let fixture: ComponentFixture<CqrsQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqrsQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CqrsQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
