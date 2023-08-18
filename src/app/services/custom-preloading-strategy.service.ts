import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, mergeMap, of, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingStrategyService implements PreloadingStrategy {
  private preloadDone = false;

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload'] && !this.preloadDone) {
      this.preloadDone = true;
      return timer(3000).pipe(mergeMap(() => load()));
    } else {
      return of(null);
    }
  }
}
