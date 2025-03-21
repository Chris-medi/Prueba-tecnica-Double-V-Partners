import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { Router, RouterModule } from '@angular/router';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([{ path: '', component: DetailsComponent }]),
        AppComponent,
        DetailsComponent,
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'host'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('host');
  });

  // it('should render title', fakeAsync(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const router = TestBed.inject(Router);
  //   fixture.ngZone?.run(() => router.navigate(['']));
  //   tick();
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Welcome host');
  // }));
});
