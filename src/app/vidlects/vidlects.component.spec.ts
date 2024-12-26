import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidlectsComponent } from './vidlects.component';

describe('VidlectsComponent', () => {
  let component: VidlectsComponent;
  let fixture: ComponentFixture<VidlectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidlectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidlectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
