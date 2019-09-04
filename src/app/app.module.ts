import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { TopoComponent } from './topo/topo.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthService } from './login/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { MotociclistaCadastroComponent } from './motociclista/motociclista-cadastro/motociclista-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopoComponent,
    MenuComponent,
    InicioComponent,
    MotociclistaCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
