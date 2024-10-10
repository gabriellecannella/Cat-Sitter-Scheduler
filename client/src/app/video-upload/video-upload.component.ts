import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
    selector: 'app-video-upload',
    templateUrl: './video-upload.component.html',
    styleUrls: ['./video-upload.component.css']
})
export class VideoUploadComponent {
    constructor(private router: Router) {} // Inject Router

    submitUpload() {
        // Handle video upload logic here
        alert('Video uploaded successfully!'); // Simple alert instead of MatSnackBar
    }

    goBackHome() {
        this.router.navigate(['/home']); // Navigate to the home route
    }
}
