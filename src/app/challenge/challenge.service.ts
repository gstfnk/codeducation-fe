import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Challenge} from "./challenge";

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private baseUrl = "http://localhost:8080/api/challenge";

  getChallenges(): Observable<Challenge[]> {
    return this.http.get<Challenge[]>(`${this.baseUrl}`)
  }

  constructor(private http: HttpClient) {
  }
}
