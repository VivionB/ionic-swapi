import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  getPlanets() {
    const p1 = this.httpSvc.get("https://swapi.co/api/planets");
    const p2 = this.httpSvc.get("https://swapi.co/api/planets");

    return merge(p1, p2);
  }
}
