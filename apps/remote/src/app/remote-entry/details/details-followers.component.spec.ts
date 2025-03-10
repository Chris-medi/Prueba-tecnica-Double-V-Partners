import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsFollowersComponent } from './details-followers.component';

describe('DetailsFollowersComponentComponent', () => {
  let component: DetailsFollowersComponent;
  let fixture: ComponentFixture<DetailsFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsFollowersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
