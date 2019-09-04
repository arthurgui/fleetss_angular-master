import { Component, OnInit } from '@angular/core';
import {AuthService} from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fleetss';

  mostrarMenu = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );

    if (localStorage.getItem('mostrarMenuEmitter') === '1') {
      this.mostrarMenu = true;
    } else {
      this.mostrarMenu = false;
    }

  }


}
