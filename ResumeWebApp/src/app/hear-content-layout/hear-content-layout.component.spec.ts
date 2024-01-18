import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearContentLayoutComponent } from './hear-content-layout.component';

describe('HearContentLayoutComponent', () => {
  let component: HearContentLayoutComponent;
  let fixture: ComponentFixture<HearContentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearContentLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearContentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
