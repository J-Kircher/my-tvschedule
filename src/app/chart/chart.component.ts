import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../service/shows.service';
import { IShow } from '../model/shows.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  chart = []; // This will hold our chart info
  private shows: IShow[] = [];
  private networkStats: any[] = [];

  constructor(private showsService: ShowsService) { }

  ngOnInit() {

    this.shows = this.showsService.getShows();

    // Create networkStats object
    this.shows.forEach(s => {
      let idx = 0;
      idx = this.networkStats.findIndex(e => e.network === s.network);
      if (idx !== -1) {
        this.networkStats[idx].count++;
      } else {
        this.networkStats.push({ 'network': s.network, 'count': 1});
      }
    });
    this.networkStats.sort((a, b) => (b.count - a.count === 0 ? a.network.localeCompare(b.network) : b.count - a.count));

    // Create array of labels for chart
    const lblArr: string[] = [];
    this.networkStats.forEach(n => {
      lblArr.push(n.network);
    });

    // Create array of data for chart
    const dataArr: string[] = [];
    this.networkStats.forEach(n => {
      dataArr.push(n.count);
    });

    // Create random color arrays for chart
    const graphColors = [];
    const graphOutlines = [];
    const hoverColor = [];

    const internalDataLength = dataArr.length;
    let i = 0;
    while (i <= internalDataLength) {
      const randomR = Math.floor((Math.random() * 130) + 100);
      const randomG = Math.floor((Math.random() * 130) + 100);
      const randomB = Math.floor((Math.random() * 130) + 100);

      const graphBackground = 'rgb('
                + randomR + ', '
                + randomG + ', '
                + randomB + ')';
        graphColors.push(graphBackground);

        const graphOutline = 'rgb('
                + (randomR - 80) + ', '
                + (randomG - 80) + ', '
                + (randomB - 80) + ')';
        graphOutlines.push(graphOutline);

        const hoverColors = 'rgb('
                + (randomR + 25) + ', '
                + (randomG + 25) + ', '
                + (randomB + 25) + ')';
        hoverColor.push(hoverColors);

      i++;
    }

    // Create data object for chart with arrays created above
    const data = {
      labels: lblArr,
      datasets: [{
        'data': dataArr,
        'backgroundColor': graphColors,
        'hoverBackgroundColor': hoverColor,
        'borderColor': graphOutlines
      }]
    };

    // Create chart object
    const ctx = document.getElementById('myCanvas');
    this.chart = new Chart(ctx, {
      'type': 'doughnut',
      'data': data,
      'options': {
        'cutoutPercentage': 25,
        'responsive': true,
        'animation': {
          'animateScale': true,
          'animateRotate': false
        }
      }
    });
  }
}
