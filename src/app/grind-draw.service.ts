import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class GrindDrawService {

  private url = 'draw';

  constructor(
    private _sanitizer: DomSanitizer,
    private http: HttpClient
  ) { }

  getBlobDrawingUrl(dg: DrawGrind): Observable<SafeUrl> {
    return this.http.post(this.url, dg, {responseType: 'blob'}).pipe(map((blob: any) => this.createUrlForBlob(blob)));
  }

  getBase64DrawingUrl(dg: DrawGrind): Observable<SafeUrl> {
    return this.http.post(this.url, dg, {responseType: 'json'}).pipe(map((result: JSON) => this.createUrlForBase64(result['base64url'])));
  }

  
  getBase64(dg: DrawGrind): Observable<string> {
    return this.http.post(this.url, dg, {responseType: 'json'}).pipe(map((result: JSON) => result['base64url']));
  }

  createUrlForBase64(base64: string) {
    const blob = new Blob([base64], {type: 'image/png'});
    return this.createUrlForBlob(blob);
  }

  createUrlForBlob(blob: any) {
    const urlCreator = window.URL;
    return this._sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
  }
}

export interface DrawGrind {
  setting: number;
  height: number;
  width: number;
}
