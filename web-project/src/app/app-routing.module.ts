import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthenticationGuard } from './guard/authentication.guard';

export const routes: Routes = [
  {'path' : '', title:'Login', component:LoginComponent},
  {'path' : 'index', title:'index', component:HomeComponent, canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
