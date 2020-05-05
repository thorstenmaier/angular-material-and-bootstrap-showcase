import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _snackBar: MatSnackBar) { }

  stations: Station[] = [
    { pos: 1, sat: "A", name: "ORF1 HD", frequenz: "11.303", pol: "H", symb: "22.000" },
    { pos: 2, sat: "A", name: "ORF2W HD", frequenz: "11.303", pol: "H", symb: "22.000" },
    { pos: 3, sat: "A", name: "ORF III HD", frequenz: "11.273", pol: "H", symb: "22.000" },
    { pos: 4, sat: "A", name: "PULS 4 Austria", frequenz: "12.051", pol: "V", symb: "27.500" },
    { pos: 5, sat: "A", name: "ServusTV HD Oesterreich", frequenz: "11.303", pol: "H", symb: "22.000" },
    { pos: 6, sat: "A", name: "ATV HD", frequenz: "11.244", pol: "H", symb: "22.000" },
    { pos: 7, sat: "A", name: "ATV2", frequenz: "11.244", pol: "H", symb: "22.000" },
    { pos: 8, sat: "A", name: "krone.tv", frequenz: "11.273", pol: "H", symb: "22.000" },
    { pos: 9, sat: "A", name: "oe24.TV HD", frequenz: "11.273", pol: "H", symb: "22.000" },
    { pos: 10, sat: "A", name: "PULS 24 HD", frequenz: "11.671", pol: "H", symb: "22.000" },
    { pos: 11, sat: "A", name: "SAT.1 A", frequenz: "12.051", pol: "V", symb: "27.500" },
    { pos: 12, sat: "A", name: "SAT.1 Gold Österreich", frequenz: "11.671", pol: "H", symb: "22.000" },
    { pos: 13, sat: "A", name: "RTL Austria", frequenz: "12.226", pol: "H", symb: "27.500" },
    { pos: 14, sat: "A", name: "RTL2 Austria", frequenz: "12.226", pol: "H", symb: "27.500" },
    { pos: 15, sat: "A", name: "SUPER RTL A", frequenz: "12.226", pol: "H", symb: "27.500" },
    { pos: 16, sat: "A", name: "NITRO Austria", frequenz: "12.663", pol: "H", symb: "22.000" },
    { pos: 17, sat: "A", name: "RTLplus Austria", frequenz: "11.244", pol: "H", symb: "22.000" },
    { pos: 18, sat: "A", name: "ProSieben Austria", frequenz: "12.051", pol: "V", symb: "27.500" },
    { pos: 19, sat: "A", name: "Pro7 MAXX Austria", frequenz: "11.671", pol: "H", symb: "22.000" },
    { pos: 20, sat: "A", name: "Kabel 1 Austria", frequenz: "12.051", pol: "V", symb: "27.500" },
    { pos: 21, sat: "A", name: "VOX Austria", frequenz: "12.226", pol: "H", symb: "27.500" },
    { pos: 22, sat: "A", name: "VOXup", frequenz: "12.226", pol: "H", symb: "27.500" },
    { pos: 23, sat: "A", name: "TELE 5", frequenz: "12.480", pol: "V", symb: "27.500" },
    { pos: 24, sat: "A", name: "sixx Austria", frequenz: "12.663", pol: "H", symb: "22.000" },
    { pos: 25, sat: "A", name: "Das Erste HD (ARD)", frequenz: "11.494", pol: "H", symb: "22.000" },
    { pos: 26, sat: "A", name: "ZDF HD", frequenz: "11.362", pol: "H", symb: "22.000" },
    { pos: 27, sat: "A", name: "3sat HD", frequenz: "11.347", pol: "V", symb: "22.000" },
    { pos: 28, sat: "A", name: "arte HD", frequenz: "11.494", pol: "H", symb: "22.000" },
    { pos: 29, sat: "A", name: "phoenix HD", frequenz: "11.582", pol: "H", symb: "22.000" },
    { pos: 30, sat: "A", name: "ARD-alpha HD", frequenz: "11.053", pol: "H", symb: "22.000" },
    { pos: 31, sat: "A", name: "BR Fernsehen Süd HD", frequenz: "11.582", pol: "H", symb: "22.000" },
    { pos: 32, sat: "A", name: "SWR BW HD", frequenz: "11.494", pol: "H", symb: "22.000" },
    { pos: 33, sat: "A", name: "SWR RP HD", frequenz: "11.494", pol: "H", symb: "22.000" },
    { pos: 34, sat: "A", name: "SR Fernsehen HD", frequenz: "11.053", pol: "H", symb: "22.000" },
    { pos: 35, sat: "A", name: "hr-fernsehen HD", frequenz: "10.891", pol: "H", symb: "22.000" },
    { pos: 36, sat: "A", name: "WDR HD Köln", frequenz: "12.422", pol: "H", symb: "27.500" },
    { pos: 37, sat: "A", name: "MDR Sachsen HD", frequenz: "10.891", pol: "H", symb: "22.000" },
    { pos: 38, sat: "A", name: "rbb Berlin HD", frequenz: "10.891", pol: "H", symb: "22.000" },
    { pos: 39, sat: "A", name: "NDR FS NDS HD", frequenz: "11.582", pol: "H", symb: "22.000" },
    { pos: 40, sat: "A", name: "Radio Bremen HD", frequenz: "11.053", pol: "H", symb: "22.000" },
    { pos: 41, sat: "A", name: "tagesschau24 HD", frequenz: "11.053", pol: "H", symb: "22.000" },
    { pos: 42, sat: "A", name: "ONE HD", frequenz: "11.053", pol: "H", symb: "22.000" },
    { pos: 43, sat: "A", name: "zdf_neo HD", frequenz: "11.362", pol: "H", symb: "22.000" },
    { pos: 44, sat: "A", name: "ZDFinfo HD", frequenz: "11.347", pol: "V", symb: "22.000" },
    { pos: 45, sat: "A", name: "kabel1 Doku austria", frequenz: "11.671", pol: "H", symb: "22.000" },
    { pos: 46, sat: "A", name: "N24 DOKU Austria", frequenz: "12.149", pol: "H", symb: "27.500" },
    { pos: 47, sat: "A", name: "Welt der Wunder", frequenz: "12.663", pol: "H", symb: "22.000" },
    { pos: 48, sat: "A", name: "DMAX Austria", frequenz: "12.149", pol: "H", symb: "27.500" },
    { pos: 49, sat: "A", name: "TLC Austria", frequenz: "12.149", pol: "H", symb: "27.500" },
    //{ pos: 50, sat: "A", name: "Aristo.TV", frequenz: "11.273", pol: "H", symb: "22.000" },
  ];

  pagedStations: Station[] = this.stations.slice(0,10);

  properties: string[] = Object.getOwnPropertyNames(this.stations[0]);
  selectedProperties;

  // MatPaginator Inputs
  length = this.stations.length;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  onPage(pageEvent: PageEvent) {
    this.pagedStations = this.stations.slice(pageEvent.pageIndex * pageEvent.pageSize, (pageEvent.pageIndex+1) * pageEvent.pageSize);
  }

  openSnackBar() {
    let ref = this._snackBar.open("test", "Undo");
    ref.onAction().subscribe(() => {
      this._snackBar.open("Rückgängig", "OK");
    });

    //this._snackBar.openFromComponent(PizzaPartyComponent, {
    //duration: 5 * 1000,
    //});
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent { }

export interface Station {
  pos: number;
  sat: string;
  name: string;
  frequenz: string;
  pol: string;
  symb: string;
}
