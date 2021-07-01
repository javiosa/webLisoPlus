import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisgenetAPIService {

  private headers = new HttpHeaders()
    // .set('content-type', 'application/json')
    .set('Cache-Control', 'no-cache')
    .set('Pragma', 'no-cache')
    .set('Access-Control-Allow-Origin', '*');

  private REST_API_SERVER = 'api/';

  constructor(private httpClient: HttpClient) { }

  sendGetRequest(query: string): Observable<any>{
    const request = this.REST_API_SERVER + query;
    console.log(this.headers);
    console.log(request);
    return this.httpClient.get<any>(request, { headers: this.headers });
  }
}
