import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getPlan(
    planNumber: string = 'plan-id-1',
    headerMock: string = ''
  ): Observable<any> {
    const headers = new HttpHeaders({ test: headerMock });

    return this.httpClient.get<any>(
      `http://localhost:8081/api/plans/${planNumber}`,
      { headers }
    );
  }

  public getOnePlan(url: string, header: string): Observable<any> {
    const headers = new HttpHeaders({ test: header });
    return this.httpClient.get<any>(url, {headers})
  }

  public getPlansFromArray(dataURL: string[], header: string) {
    const headers = new HttpHeaders({ test: header });

    return dataURL.map((url) => this.httpClient.get<any>(url, { headers }));
  }

  public getAllPlan(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8081/api/plans');
  }
}
