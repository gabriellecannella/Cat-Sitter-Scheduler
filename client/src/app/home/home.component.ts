import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateTo(path: string) {
    console.log(`Navigating to: ${path}`); // Log the navigation action
    this.router.navigate([path]);
  }
}
