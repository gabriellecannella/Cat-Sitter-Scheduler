import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Make sure to import RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected property name (should be styleUrls)
})
export class AppComponent {
  title = 'client';
}
