import { Observable, of } from 'rxjs'
import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class ExternalUrlResolverService implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    const externalUrl = next.paramMap.get('externalUrl') as string
    window.open(externalUrl, '_self')
    return of(false)
  }
}
