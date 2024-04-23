import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ytwordcount';
  url: string;

  constructor() {
    this.url = '';
  }

  fetchVideo() {
    console.log(this.url);
  }
}
