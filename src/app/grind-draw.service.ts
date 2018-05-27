import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GrindDrawService {

  private url = 'draw';

  constructor(
    private http: HttpClient
  ) { }

  getDrawing(dg: DrawGrind): Observable<any> {
    return this.http.post(this.url, dg);
  }
}

export interface DrawGrind {
  setting: number;
  height: number;
  width: number;
}
