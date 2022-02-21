import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp02TransclusionComponent } from './cmp02-transclusion.component';

describe('Cmp02TransclusionComponent', () => {
  let component: Cmp02TransclusionComponent;
  let fixture: ComponentFixture<Cmp02TransclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp02TransclusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp02TransclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
