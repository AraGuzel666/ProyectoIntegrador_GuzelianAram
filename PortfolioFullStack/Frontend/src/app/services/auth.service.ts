import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NuevoUsuario } from '../Model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../Model/login-usuario';
import { JwtDto } from '../Model/jwt-dto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //authURL = 'http:localhost:8080/auth/';
  URL = environment.URL + 'auth/';

  constructor(private httpClient : HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login', loginUsuario);
  }
}
