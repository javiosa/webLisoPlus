import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSelectorComponent } from './info-selector.component';

describe('InfoSelectorComponent', () => {
  let component: InfoSelectorComponent;
  let fixture: ComponentFixture<InfoSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
