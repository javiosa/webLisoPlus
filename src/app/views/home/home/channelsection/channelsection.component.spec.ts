import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsectionComponent } from './channelsection.component';

describe('ChannelsectionComponent', () => {
  let component: ChannelsectionComponent;
  let fixture: ComponentFixture<ChannelsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelsectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
