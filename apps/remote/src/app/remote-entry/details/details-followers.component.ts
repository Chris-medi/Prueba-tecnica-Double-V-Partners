import { Component, inject, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';


import { InfoPipe, DataService, ApiService }  from '@aplication/data-access-user';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-followers',
  imports: [CommonModule],
  templateUrl: './details-followers.component.html',
  styleUrl: './details-followers.component.css',
})
export class DetailsFollowersComponent implements OnInit, OnDestroy{
  @Input() username!: string;

  followers: any[] = []

  private _dataService: DataService = inject(DataService)
  private _apiService: ApiService = inject(ApiService)
  private _httpRouter:ActivatedRoute = inject(ActivatedRoute)


  currentUser$ = this._dataService.CurrentUser$;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    // this.currentUser$
    // .pipe(distinctUntilChanged(),takeUntil(this.destroy$))
    // .subscribe(async(name) => {
    //   if(name){
    //     console.log(name);
    //   }
    // });
    this._httpRouter.paramMap.subscribe((params) => {
      const username = params.get('username') as string
      console.log(params.get('username'))
      this._apiService.requestFollowersUser(username).subscribe((data) => {
        this.followers = data
        console.log(data)
      })
   });
  }

  goToHome(){
    window.location.href = 'http://localhost:3000/'
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
