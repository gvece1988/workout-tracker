import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class StorageService {

  constructor() { }

  public write(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);    
  }

  public read<T>(key: string): T {
    let value = localStorage.getItem(key);

    if (value && value != "undefined" && value != "null") {
      return <T>JSON.parse(value);
    }
    return null;
  }
}
