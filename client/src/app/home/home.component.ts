import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    constructor(private router: Router) {} 

    // Method to navigate to the Booking page
    navigateToBooking() {
        this.router.navigate(['/booking']); 
    }

    // Method to navigate to the Upload page
    navigateToUpload() {
        this.router.navigate(['/upload']); 
    }
}
