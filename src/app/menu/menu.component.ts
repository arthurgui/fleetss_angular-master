import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public nomeUsuario: string = localStorage.getItem('nome');
  public emailUsuario: string = localStorage.getItem('email');

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {



  }

  logout() {

    this.authService.mostrarMenuEmitter.emit(false);

    localStorage.setItem('usuarioAutenticado', '0');

    localStorage.setItem('mostrarMenuEmitter', '0');

    this.router.navigate(['/login']);
  }

}
