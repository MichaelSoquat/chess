import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  rows = [1, 2, 3, 4, 5, 6, 7, 8]
  columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
}
