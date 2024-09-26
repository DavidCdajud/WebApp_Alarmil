/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlarmcreationComponent } from './alarmcreation.component';

describe('AlarmcreationComponent', () => {
  let component: AlarmcreationComponent;
  let fixture: ComponentFixture<AlarmcreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmcreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
