import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaucherComponent } from './gaucher.component';

describe('GaucherComponent', () => {
  let component: GaucherComponent;
  let fixture: ComponentFixture<GaucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
