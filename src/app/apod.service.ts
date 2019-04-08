import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Apod } from './apod';

import { NgApodConfig } from '../../config/ng-apod.config';



@Injectable({
  providedIn: 'root'
})


export class ApodService {

  private url:string;

  constructor(
    private http:HttpClient,
    private ngApodConfig: NgApodConfig
  ){
    this.url=`https://api.nasa.gov/planetary/apod?api_key=${this.ngApodConfig.key}`;
  }

  getApod(date:string): Observable<Apod>{
    return this.http.get<Apod>(`${this.url}&date=${date}`);
  }
}





