import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabryComponent } from './fabry.component';

describe('FabryComponent', () => {
  let component: FabryComponent;
  let fixture: ComponentFixture<FabryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
