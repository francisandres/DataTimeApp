import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FluxosReceitasService } from '../fluxos/fluxos-receitas.service';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesGuardGuard implements CanActivate {
  constructor(private fluSer: FluxosReceitasService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.fluSer.guard) {
      this.router.navigateByUrl('/config');
      return false;
    } else {
      return true; }
  }

}
