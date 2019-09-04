import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { AuthGuard } from './guards/auth.guard';
import { MotociclistaCadastroComponent } from './motociclista/motociclista-cadastro/motociclista-cadastro.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'login' , component: LoginComponent },
  { path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]  },
  { path: 'motociclista/cadastro', component: MotociclistaCadastroComponent, canActivate: [AuthGuard]  }
];
