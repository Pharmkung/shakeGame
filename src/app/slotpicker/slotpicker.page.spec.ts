import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotpickerPage } from './slotpicker.page';

describe('SlotpickerPage', () => {
  let component: SlotpickerPage;
  let fixture: ComponentFixture<SlotpickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotpickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotpickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
