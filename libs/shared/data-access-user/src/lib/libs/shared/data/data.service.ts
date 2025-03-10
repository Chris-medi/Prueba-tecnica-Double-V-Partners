import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _CurrentUser = new BehaviorSubject({});
  CurrentUser$ = this._CurrentUser.asObservable();

  setCurrentUser(user: Record<string, string|boolean|number>) {
    this._CurrentUser.next(user);
  }
}
