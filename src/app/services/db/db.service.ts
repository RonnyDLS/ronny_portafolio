import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DB } from '../../models/dbDatos.models';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http:HttpClient) {}

  getDB(): Observable<DB>{
    return this.http.get<DB>("/js/db.json");
  }
}
