import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpsiComponent } from './mpsi.component';

describe('MpsiComponent', () => {
  let component: MpsiComponent;
  let fixture: ComponentFixture<MpsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MpsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
