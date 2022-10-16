import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../Model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = environment.URL + 'skill/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `detail/${id}`);
  }

  public save(skills: Skill): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', skills);
  }

  public update(id: number, skills: Skill): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skills);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }

}
