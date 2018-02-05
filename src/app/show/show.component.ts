import { Component, Input, OnInit } from '@angular/core';
import { IShow } from '../model/shows.model';

@Component({
  selector: 'app-show',
  template: `
      <a href="{{ show.link }}">
        <img src="/assets/images/Networks/{{ show.network }}.gif" alt="{{ show.network }}"
        title="{{ show.network }}" border="0"><img src="/assets/images/Shows/{{ show.image }}"
        alt="{{ show.name }}" title="{{ show.info }}" border="0">
      </a>
`,
  styles: []
})
export class ShowComponent implements OnInit {
  @Input() show: IShow;
  constructor() { }

  ngOnInit() {
  }

}
