import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .app {
      width: 100%;
      height: 100%;
      background-color: #eee;
    }
  `]
})
export class AppComponent {
  title = 'app';
}
