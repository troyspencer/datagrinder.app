import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, from, observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { Grinder } from './protobuf/datagrinder/datagrinder_pb_service';
import { GrinderInput, GrinderOutput} from './protobuf/datagrinder/datagrinder_pb';
import { grpc } from 'grpc-web-client';
import { Request } from 'grpc-web-client/dist/invoke';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GrindDrawService {

  constructor(
    private _sanitizer: DomSanitizer
  ) { }

  getGrinderOutput(grinderInput: GrinderInput): Observable<any>  {
    const requestPromise = new Promise<any>((resolve, reject) => {
      grpc.unary(Grinder.Grind, {
        request: grinderInput,
        host: environment.host,
        onEnd: res => {
          const { status, statusMessage, headers, message, trailers } = res;
          if (status === grpc.Code.OK && message) {
            resolve(message.toObject());
          }
        }
      });
    });
    return from(requestPromise);
  }

  createUrlForBase64(base64: string): SafeUrl {
    const blob = new Blob([base64], {type: 'image/png'});
    return this.createUrlForBlob(blob);
  }

  createUrlForBlob(blob: any) {
    const urlCreator = window.URL;
    return this._sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
  }
}
