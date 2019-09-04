import { EventEmitter , Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuarioAutenticado = false;

  public mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) { }


  fazerLoginServidor(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('http://localhost:8080/api/usuario/logar', usuario).pipe(
      tap((user: Usuario) => {
          if (user !== null) {

            document.body.style.backgroundColor = '#e9e9e9';

            this.usuarioAutenticado = true;
            localStorage.setItem('usuarioAutenticado', '1');

            this.mostrarMenuEmitter.emit(true);
            localStorage.setItem('mostrarMenuEmitter', '1');

            this.router.navigate(['/inicio']);
          } else {
            alert('Usuário ou senha incorreto!');
            this.mostrarMenuEmitter.emit(false);
            this.usuarioAutenticado = false;
          }
      })
    );
  }


  usuarioEstaAutenticado() {
    //return this.usuarioAutenticado;
    return localStorage.getItem('usuarioAutenticado');
  }
}
