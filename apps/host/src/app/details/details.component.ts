import { Component, OnInit, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoPipe, DataService, ApiService }  from '@aplication/data-access-user';

@Component({
  selector: 'app-details',
  imports: [CommonModule, InfoPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  @Input() name!: string;

  user = {
    name: '',
    following: 0,
    followers: 0,
    avatar_url: '',
    login: ''
  }

  private _apiService: ApiService = inject(ApiService)
  private _dataService: DataService = inject(DataService)

  handleClick(){
    this._dataService.setCurrentUser(this.user)
  }

  ngOnInit(): void {
    console.log('se inicia el componente host')
    this._apiService.requestDetailsUser(this.name).subscribe((data) => {
      this.user = data
    })
  }
}
