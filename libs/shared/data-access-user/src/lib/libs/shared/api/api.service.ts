import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import  { Observable } from 'rxjs';

import  { UserDetails, FollowersUser } from "./interfaces-global"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URLS = {
    user_details: (name:string) => `https://api.github.com/users/${name}`,
    user_followers: (name:string) => `https://api.github.com/users/${name}/followers`
  }
  constructor(private http: HttpClient) { }

  requestDetailsUser(name: string): Observable<UserDetails> {
    return this.http.get<UserDetails>(this.URLS.user_details(name))
  }

  requestFollowersUser(name: string): Observable<FollowersUser[]> {
    return this.http.get<FollowersUser[]>(this.URLS.user_followers(name))
  }
}
