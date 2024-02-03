import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { AlbumComponent } from './pages/album/album.component';
import { UserComponent } from './pages/user/user.component';
import { AuthenticationGuard } from './guard/authentication.guard';

export const routes: Routes = [
  {'path' : '', title:'Login', component:LoginComponent},
  {'path' : 'index', title:'index', component:HomeComponent, canActivate: [AuthenticationGuard]},
  {'path' : 'post', title:'Post', component:PostComponent, canActivate: [AuthenticationGuard]},
  {'path' : 'album', title:'Album', component:AlbumComponent, canActivate: [AuthenticationGuard]},
  {'path' : 'user', title:'User', component:UserComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
