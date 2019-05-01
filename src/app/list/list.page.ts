import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items = [];
  constructor(private fooSvc: SharedDataService, private swapiSvc: SwapiService) {}

  ngOnInit() {
    this.swapiSvc.getPlanets().subscribe(
      data => {
        console.log(data);

        this.items = [
          ...this.items
          , ...(<any> data).results.map(x => x.name)
        ].sort();
      }
      , error => console.log(error)
    );
  }
}
