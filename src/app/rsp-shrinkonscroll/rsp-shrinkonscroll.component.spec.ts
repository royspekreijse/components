/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RspShrinkonscrollComponent } from './rsp-shrinkonscroll.component';

describe('RspShrinkonscrollComponent', () => {
  let component: RspShrinkonscrollComponent;
  let fixture: ComponentFixture<RspShrinkonscrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RspShrinkonscrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RspShrinkonscrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
