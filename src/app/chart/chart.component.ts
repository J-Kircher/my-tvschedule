import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../service/shows.service';
import { StorageService } from '../service/storage.service';
import { IShow, ITimeSlot } from '../model/shows.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  private myChart: Chart = []; // This will hold our chart info
  private shows: IShow[] = [];
  private timeSlots: ITimeSlot[] = [];
  private networkStats: any[] = [];

  private _label: string[] = [];
  private _data: string[] = [];
  private _graphColors: string[] = [];
  private _graphOutlines: string[] = [];
  private _hoverColors: string[] = [];
  private _chartData: any;

  constructor(private showsService: ShowsService, private storageService: StorageService) { }

  ngOnInit() {
    // console.log('[chart] ngOnInit()');
    this.createChartObject('all');
  }

  createChartObject(chartContent: string): void {
    // console.log('[chart] createChartObject()');
    this.shows = this.showsService.getShows();
    this.timeSlots = this.storageService.loadLocalStorage();

    // Create networkStats object
    this.networkStats = [];
    if (typeof this.myChart.chart !== 'undefined') {
      this.myChart.chart.destroy();
    }

    this.shows.forEach(s => {
      let idx = 0;
      const savedShow = this.getShowInSavedTimeSlots(s.name);
      if ( (chartContent === 'all') || ( (chartContent === 'scheduled') && (savedShow.slot !== 'SBS') ) ) {
        idx = this.networkStats.findIndex(e => e.network === s.network);
        if (idx !== -1) {
          this.networkStats[idx].count++;
        } else {
          this.networkStats.push({ 'network': s.network, 'count': 1 });
        }
      }
    });
    this.networkStats.sort((a, b) => (b.count - a.count === 0 ? a.network.localeCompare(b.network) : b.count - a.count));

    this.getChartDataObject();

    // Create chart object
    const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    this.myChart = new Chart(ctx, {
      'type': 'doughnut',
      'data': this._chartData,
      'options': {
        'cutoutPercentage': 25,
        'responsive': true,
        'animation': {
          'animateScale': true,
          'animateRotate': false
        },
        'legend': {
          'position': 'right'
        }
      }
    });
  }

  getChartLabelArray(): void {
    // console.log('[chart] getChartLabelArray()');
    // Create array of labels for chart
    this._label = [];
    this.networkStats.forEach(n => {
      this._label.push(n.network);
    });
  }

  getChartDataArray(): void {
    // console.log('[chart] getChartDataArray()');
    // Create array of labels for chart
    this._data = [];
    this.networkStats.forEach(n => {
      this._data.push(n.count);
    });
  }

  getChartColorArrays(dataLength: number): void {
    // console.log('[chart] getChartColorArrays()');
    // Create random color arrays for chart

    this._graphColors = [];
    this._graphOutlines = [];
    this._hoverColors = [];

    const internalDataLength = dataLength;
    let i = 0;
    while (i <= internalDataLength) {
      const randomR = Math.floor((Math.random() * 130) + 100);
      const randomG = Math.floor((Math.random() * 130) + 100);
      const randomB = Math.floor((Math.random() * 130) + 100);

      const graphBackground = 'rgb('
        + randomR + ', '
        + randomG + ', '
        + randomB + ')';
      this._graphColors.push(graphBackground);

      const graphOutline = 'rgb('
        + (randomR - 80) + ', '
        + (randomG - 80) + ', '
        + (randomB - 80) + ')';
      this._graphOutlines.push(graphOutline);

      const hoverColors = 'rgb('
        + (randomR + 25) + ', '
        + (randomG + 25) + ', '
        + (randomB + 25) + ')';
      this._hoverColors.push(hoverColors);

      i++;
    }
  }

  getChartDataObject(): void {
    // console.log('[chart] getChartDataObject()');
    // Create data object for chart with arrays created above
    this.getChartLabelArray();
    this.getChartDataArray();
    this.getChartColorArrays(this._data.length);

    this._chartData = {
      labels: this._label,
      datasets: [{
        'data': this._data,
        'backgroundColor': this._graphColors,
        'hoverBackgroundColor': this._hoverColors,
        'borderColor': this._graphOutlines
      }]
    };
  }

  getShowInSavedTimeSlots(showName: string): IShow {
    let myShow: IShow = null;
    this.timeSlots.forEach(slot => {
      slot.shows.forEach(show => {
        if (show.name === showName) {
          myShow = show;
        }
      });
    });
    return myShow;
  }
}
