import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { ConversationModel } from '../models/conversation.model';

@Injectable({
  providedIn: 'root'
})
export class ConservationService {
  protected apiServerPaths = environment.apiServer.paths.conversation;

  constructor(
    private apiService: ApiService
  ) { }

  public getAllChatByParticipant(id: string): Observable<ConversationModel> {
    return this.apiService.get(`${this.apiServerPaths.listByUserId}/${id}`, {}, map(response => {
      return response;
    }));
  }
}
