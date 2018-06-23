import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import { Grinder } from './protobuf/datagrinder/datagrinder_pb_service';
import { GrinderInput, GrinderOutput} from './protobuf/datagrinder/datagrinder_pb';
import { grpc } from 'grpc-web-client';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GrindDrawService {

  public grinderInput: GrinderInput = new GrinderInput();
  private drawFormCompleteSource = new Subject<GrinderInput>();

  drawFormComplete$ = this.drawFormCompleteSource.asObservable();

  constructor(
    private _sanitizer: DomSanitizer
  ) {
    this.grinderInput.setHeight(500);
    this.grinderInput.setWidth(500);
    this.grinderInput.setSetting(3);
  }

  getGrinderOutput(grinderInput: GrinderInput): Observable<GrinderOutput>  {
    return new Observable<GrinderOutput>((observer) => {
      const rpcOptions = {
        request: grinderInput,
        host: environment.host,
        onEnd: res => {
          const { status, message } = res;
          if (status === grpc.Code.OK && message) {
            observer.next(message);
            observer.complete();
          }
        }
      };
      const grpcRequest: grpc.Request = grpc.unary(Grinder.Grind, rpcOptions);
      return {unsubscribe() { grpcRequest.close(); }};
    });
  }

  createUrlForBase64(base64: string): SafeUrl {
    const blob = new Blob([base64], {type: 'image/png'});
    return this.createUrlForBlob(blob);
  }

  createUrlForBlob(blob: any) {
    const urlCreator = window.URL;
    return this._sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
  }

  completeDrawForm(grinderInput: GrinderInput) {
    this.drawFormCompleteSource.next(grinderInput);
  }
}
