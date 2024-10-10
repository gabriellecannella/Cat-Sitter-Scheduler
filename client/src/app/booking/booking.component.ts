import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar for notifications
import { Router } from '@angular/router'; // Import Router for navigation

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css']
})
export class BookingComponent {
    constructor(private snackBar: MatSnackBar, private router: Router) {} // Inject Router

    submitBooking() {
        // Handle the booking logic (e.g., send data to backend)
        this.snackBar.open('Booking submitted successfully!', 'Close', {
            duration: 2000,
        });
    }

    goHome() {
        this.router.navigate(['/']); // Navigate back to the home page
    }
}
