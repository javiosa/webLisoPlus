import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseResultComponent } from './disease-result.component';

describe('DiseaseResultComponent', () => {
  let component: DiseaseResultComponent;
  let fixture: ComponentFixture<DiseaseResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
