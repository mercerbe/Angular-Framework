import { Injectable } from '@angular/core';

//obserable imports
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

//model log import
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {id: '1', text: 'Generated Components', date: new Date ('1/1/2018 9:33:10')},
      {id: '2', text: 'test logs', date: new Date ('1/1/2018 9:40:12')},
      {id: '3', text: 'seeding logs', date: new Date ('1/1/2018 10:10:45')},

    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
