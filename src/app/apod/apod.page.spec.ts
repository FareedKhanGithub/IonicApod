import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodPage } from './apod.page';

describe('ApodPage', () => {
  let component: ApodPage;
  let fixture: ComponentFixture<ApodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
