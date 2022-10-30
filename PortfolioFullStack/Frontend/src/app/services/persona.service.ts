import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Model/persona.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //URL = 'http://localhost:8080/personas/'
  URL = environment.URL + 'personas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  // public save(educacion: Educacion): Observable<any>{
  //   return this.httpClient.post<any>(this.URL + 'create', educacion);
  // }

  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }

  // public delete(id: number): Observable<any>{
  //   return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  // }
}
