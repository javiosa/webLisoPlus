import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneResultComponent } from './gene-result.component';

describe('GeneResultComponent', () => {
  let component: GeneResultComponent;
  let fixture: ComponentFixture<GeneResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
