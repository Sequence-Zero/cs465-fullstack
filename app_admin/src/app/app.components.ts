import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './services/navbar/navbar';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, Navbar],
    templateUrl: './app.components.html',
    styleUrl: './app.css'
})
export class AppComponent {
    title = 'Travlr Getaways Admin!'
}
