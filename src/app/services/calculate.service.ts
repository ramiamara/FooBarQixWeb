import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entry } from '../models/Entry.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CalculateService {
    constructor(private httpClient: HttpClient) { }
// call the back web api to calculate the number
    calculate(entry: Entry): Observable<any> {
        return this.httpClient.post(`${environment.apiUrl}/Calculates`, entry, {responseType: 'text'});
      }

}