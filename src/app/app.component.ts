import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  showEndedShows: boolean;

  toggleEnded(showEnded: boolean) {
    this.showEndedShows = showEnded;
  }
}
