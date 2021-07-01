import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantResultComponent } from './variant-result.component';

describe('VariantResultComponent', () => {
  let component: VariantResultComponent;
  let fixture: ComponentFixture<VariantResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariantResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
