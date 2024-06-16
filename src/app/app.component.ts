import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    HeaderComponent,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
