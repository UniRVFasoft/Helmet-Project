import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) {
  }

  getStates():Observable<any> {
    return this.http.get("https://649090681e6aa71680cb79f3.mockapi.io/estados")
  }
  
}
