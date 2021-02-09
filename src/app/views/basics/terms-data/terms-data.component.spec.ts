import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsDataComponent } from './terms-data.component';

describe('TermsDataComponent', () => {
  let component: TermsDataComponent;
  let fixture: ComponentFixture<TermsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
