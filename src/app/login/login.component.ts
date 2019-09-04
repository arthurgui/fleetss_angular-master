import {Component, EventEmitter, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './auth.service';
import {Usuario} from '../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  public autenticando = false;
  public loginValidar: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    document.body.className = 'login-page';
    if (this.authService.usuarioEstaAutenticado() === '1') {
      this.router.navigate(['/inicio']);
    } else {
    }
  }

  fazerLogin() {
    this.autenticando = true;
    if (this.usuario.login === undefined || this.usuario.login === '' || this.usuario.login === null ||
      this.usuario.login.trim().length === 0) {
      this.autenticando = false;
      this.loginValidar = '';
      alert('Preencha o campo Usuário!');
    } else if (this.usuario.senha === undefined || this.usuario.senha === '' || this.usuario.senha === null) {
      this.autenticando = false;
      alert('Preencha o campo Senha!');
    } else {
      this.authService.fazerLoginServidor(this.usuario).subscribe(data => {
        if (data === null) {
          this.autenticando = false;
        } else {
          localStorage.setItem('nome', data.nome);
          localStorage.setItem('email', data.email);
        }
      });
    }

  }



}
