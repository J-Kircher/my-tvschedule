import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../service/shows.service';
import { StorageService } from '../service/storage.service';
import { IShow, ITimeSlot, INetworkData } from '../model/shows.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})

export class ChartComponent implements OnInit {
  private chartView: string;
  private myChart: Chart = []; // This will hold our chart info
  private shows: IShow[] = [];
  private timeSlots: ITimeSlot[] = [];
  private networkStats: INetworkData[] = []; // This will contain the labels and data for the chart

  constructor(private showsService: ShowsService, private storageService: StorageService) { }

  ngOnInit() {
    // console.log('[chart] ngOnInit()');
    this.createChartObject('all');
  }

  createChartObject(chartContent: string): void {
    // console.log('[chart] createChartObject()');
    this.chartView = chartContent;
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
      if (savedShow.slot !== 'END') {
        if ( (chartContent === 'all') || ( (chartContent === 'scheduled') && (savedShow.slot !== 'SBS') && (savedShow.slot.charAt(0) !== 'H') ) ) {
          idx = this.networkStats.findIndex(e => e.network === s.network);
          if (idx !== -1) {
            this.networkStats[idx].count++;
          } else {
            this.networkStats.push({ 'network': s.network, 'count': 1 });
          }
        }
      }
    });
    this.networkStats.sort((a, b) => (b.count - a.count === 0 ? a.network.localeCompare(b.network) : b.count - a.count));

    // Create chart object
    const canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    this.myChart = new Chart(ctx, {
      'type': 'doughnut',
      'data': this.getChartDataObject(),
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

  getChartColorArrays(dataLength: number): any {
    // console.log('[chart] getChartColorArrays()');
    // Create random color arrays for chart
    const _graphColors: string[] = [];
    const _graphOutlines: string[] = [];
    const _hoverColors: string[] = [];

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
      _graphColors.push(graphBackground);

      const graphOutline = 'rgb('
        + (randomR - 80) + ', '
        + (randomG - 80) + ', '
        + (randomB - 80) + ')';
      _graphOutlines.push(graphOutline);

      const hoverColors = 'rgb('
        + (randomR + 25) + ', '
        + (randomG + 25) + ', '
        + (randomB + 25) + ')';
      _hoverColors.push(hoverColors);

      i++;
    }

    return {
      'graphColors': _graphColors,
      'graphOutlines': _graphOutlines,
      'hoverColors': _hoverColors
    };
  }

  getChartDataObject(): any {
    // console.log('[chart] getChartDataObject()');
    // Create data object for chart with arrays created above
    const _label: string[] = this.networkStats.map(n => n.network);
    const _data: string[] = this.networkStats.map(n => n.count.toString());
    const _colorArrays: any = this.getChartColorArrays(_data.length);

    return {
      labels: _label,
      datasets: [{
        'data': _data,
        'backgroundColor': _colorArrays.graphColors,
        'hoverBackgroundColor': _colorArrays.hoverColors,
        'borderColor': _colorArrays.graphOutlines
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
