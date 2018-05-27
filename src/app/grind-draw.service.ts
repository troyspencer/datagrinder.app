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

  getDrawing(): Observable<any> {
    return this.http.get(this.url);
  }
}
