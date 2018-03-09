import { Component, Input, OnInit } from '@angular/core';
import { IShow } from '../model/shows.model';

@Component({
  selector: 'app-show',
  template: `
    <div class="slot" [title]="getTitleText(show)">
      <div [ngClass]="{ 'network': displayShow }"
        [style.background-image]="displayShow ? 'url(/assets/images/Networks/' + show.network + '.gif)' : null">
      </div>
      <div [ngClass]="{ 'myShow': displayShow }"
        [style.background-image]="displayShow ? 'url(/assets/images/Shows/' + show.image + '.gif)' : null">
        <a *ngIf="displayShow" href="{{ show.link }}" target="{{ '_' + show.image }}">
          <span class="glyphicon glyphicon-new-window link-icon"></span>
        </a>
        <h4 *ngIf="!displayShow" class="text-primary show-info">{{ show.info }}</h4>
      </div>
    </div>
  `,
  styles: [`
    .slot { display: flex; min-height: 10px; min-width: 300px; }
    .network { min-height: 50px; min-width: 50px; }
    .myShow { min-height: 50px; min-width: 250px; }
    .myShow a { opacity: 0; transition: 1s; }
    .myShow:hover a { opacity: 1; }
    .show-info { margin: 2px 7px; }
    .link-icon { color: grey; text-shadow: 1px 1px black; margin: 30px 2px 1px; }
  `]
})

export class ShowComponent implements OnInit {
  @Input() show: IShow;
  private displayShow = true;

  constructor() { }

  ngOnInit() {
    if (this.show.image === '') {
      this.displayShow = false;
    }
  }

  getTitleText(show: IShow): string {
    let titleTxt = '';
    const startDate = new Date(show.start);
    const today = new Date();
    if (show.name !== '') {
      titleTxt = titleTxt.concat(show.name + ' / ' + show.info);
      if (show.slot === 'SBS' && startDate > today) {
        titleTxt = titleTxt.concat(' / Starts on ' + show.start);
      } else {
        titleTxt = titleTxt.concat(' / Started on ' + show.start);
      }
    } else {
      titleTxt = titleTxt.concat(show.info);
    }
    return titleTxt;
  }
}
