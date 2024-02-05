import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  showPost: boolean = false;
  showUser: boolean = false;
  showAlbum: boolean = false;

  showSelectedRoutine(routine: string) {
    switch (routine) {
      case 'users':
        this.showUser = true;
        this.showPost = false;
        this.showAlbum = false;
        break;
      case 'posts':
        this.showUser = false;
        this.showPost = true;
        this.showAlbum = false;
        break;
      case 'albums':
        this.showUser = false;
        this.showPost = false;
        this.showAlbum = true;
        break;
      default:
        this.showUser = false;
        this.showPost = false;
        this.showAlbum = false;
        break;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
