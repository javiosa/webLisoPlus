import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolssectionComponent } from './toolssection.component';

describe('ToolssectionComponent', () => {
  let component: ToolssectionComponent;
  let fixture: ComponentFixture<ToolssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolssectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
