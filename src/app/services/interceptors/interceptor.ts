import { AuthService } from './../auth/auth.service';

import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import { tap } from 'rxjs/operators'
@Injectable()
export class Interceptor implements HttpInterceptor {


  constructor(private authService: AuthService) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    // this.spinner.show();

    let appReq = req.clone({});

    /**
     * if token exits will be added to request headers
     */
    console.log(this.authService.getTokenFromLocaleStorge())
    if (this.authService.getTokenFromLocaleStorge()) {
      appReq = appReq.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getTokenFromLocaleStorge()}`
        }
      });
    }
    return next.handle(appReq).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {

      }

    }, (errors: any) => {
      if (errors instanceof HttpErrorResponse) {

        return errors.error;
      }
    }));

  }
}