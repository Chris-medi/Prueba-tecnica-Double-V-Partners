import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsFollowersComponent } from './details-followers.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { provideHttpClient } from '@angular/common/http';

describe('DetailsFollowersComponentComponent', () => {
  let component: DetailsFollowersComponent;
  let fixture: ComponentFixture<DetailsFollowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsFollowersComponent, RouterTestingModule ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
