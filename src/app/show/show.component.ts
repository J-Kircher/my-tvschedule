import { Component, Input } from '@angular/core';
import { IShow } from '../model/shows.model';

@Component({
  selector: 'app-show',
  template: `
    <div class="slot" title="{{ show.name }} / {{ show.info }}">
      <div class="network" [style.background-image]="'url(/assets/images/Networks/' + show.network + '.gif)'">
        <a href="{{ show.link }}"></a>
      </div>
      <div class="myShow" [style.background-image]="'url(/assets/images/Shows/' + show.image + ')'">
        <a href="{{ show.link }}"></a>
      </div>
    </div>
  `,
  styles: [`
    .slot { display: flex; min-height: 50px; min-width: 300px; }
    .network { min-height: 50px; min-width: 50px; }
    .myShow { min-height: 50px; min-width: 250px; }
  `]
})

export class ShowComponent {
  @Input() show: IShow;
  constructor() { }
}
