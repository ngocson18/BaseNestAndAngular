import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { APIResponseModel } from '../models/api-response.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  protected apiServerPaths = environment.apiServer.paths.user;
  constructor(
    private apiService: ApiService
  ) {}

  public list(): Observable<UserModel[]> {
    return this.apiService.get(this.apiServerPaths.list, {}, map(response => {
      return response;
    }));
  }

  public getById(id: string): Observable<UserModel> {
    return this.apiService.get(`${this.apiServerPaths.list}/${id}`, {}, map(response => {
      return response;
    }));
  }
}
