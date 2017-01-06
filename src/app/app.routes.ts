// app.routes.ts
import { HomeComponent }      from './home/home.component';
import { LoginComponent }     from './login/login.component';
import { ProfileComponent }   from './profile/profile.component';
import { RegisterComponent }  from './register/register.component';
import { AdminComponent}      from './admin/admin.component';

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent }
];
