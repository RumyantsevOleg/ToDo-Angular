import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public getPlan(planNumber: string = "1"): Observable<any> {
    return this.httpClient.get<any>(
      `http://localhost:8081/api/plans/plan-id-${planNumber}`
    );
  }

  public getAllPlan (): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8081/api/plans')
  }
}
