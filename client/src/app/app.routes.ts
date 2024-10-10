import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'video-upload', component: VideoUploadComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
