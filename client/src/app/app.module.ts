import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes'; // Keep this as app.routes.ts
import { AppComponent } from './app.component'; // Main app component
import { BookingComponent } from './booking/booking.component'; // Booking component
import { VideoUploadComponent } from './video-upload/video-upload.component'; // Video upload component
import { HomeComponent } from './home/home.component'; // Home component

// Import Angular Material Modules
import { MatButtonModule } from '@angular/material/button'; // Button module
import { MatInputModule } from '@angular/material/input'; // Input module
import { MatCardModule } from '@angular/material/card'; // Card module
import { MatDatepickerModule } from '@angular/material/datepicker'; // Datepicker module
import { MatNativeDateModule } from '@angular/material/core'; // Native date support
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Snackbar module
import { MatFormFieldModule } from '@angular/material/form-field'; // Form field module

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent, // Declare BookingComponent
    VideoUploadComponent, // Declare VideoUploadComponent
    HomeComponent // Declare HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Ensure AppRoutingModule is set up correctly
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule, 
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatFormFieldModule, // This is sufficient for mat-label
  ],
  providers: [],
  bootstrap: [AppComponent] // Bootstrapping the main app component
})
export class AppModule { }
