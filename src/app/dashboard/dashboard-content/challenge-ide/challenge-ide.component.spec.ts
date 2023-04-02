import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeIdeComponent } from './challenge-ide.component';

describe('ChallengeIdeComponent', () => {
  let component: ChallengeIdeComponent;
  let fixture: ComponentFixture<ChallengeIdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeIdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
