import { HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse, HttpInterceptor, HttpHandler, HttpInterceptorFn } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { NotificationService } from '@aplication/my-lib'

import { inject } from '@angular/core';

// @Injectable()
// export class cachingInterceptorError implements HttpInterceptor {
//   constructor(private _notificationService: NotificationService) {}

//   intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     return next.handle(req).pipe(
//       catchError((error: HttpErrorResponse) => {
//         this._notificationService.showMessage(`Error en la solicitud: ${error.message || 'Desconocido'}`);
//         return throwError(() => error);
//       })
//     );
//   }
// }


export const CachingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const _notificationService: NotificationService = inject(NotificationService);
  console.log('interceptor fetch')
  return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        _notificationService.showMessage(`Error en la solicitud: ${error.message || 'Desconocido'}`);
        return throwError(() => error);
      })
    );
};

