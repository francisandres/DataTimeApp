import { Injectable } from '@angular/core';
import { Fluxo } from '../Fluxo';

@Injectable({
  providedIn: 'root'
})
export class FluxosReceitasService {
  fluxos: Fluxo[] = [];

  constructor() { }
}
