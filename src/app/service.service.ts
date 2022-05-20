import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  rows = [8,7,6,5,4,3,2,1]
  columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
}
