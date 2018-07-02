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

  private stateSource = new BehaviorSubject<boolean>
    (true);
    stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   {id: '1', text: 'Generated Components', date: new Date ('1/1/2018 9:33:10')},
    //   {id: '2', text: 'test logs', date: new Date ('1/1/2018 9:40:12')},
    //   {id: '3', text: 'seeding logs', date: new Date ('1/1/2018 10:10:45')},
    //
    // ]
    this.logs = [];
  }

  getLogs(): Observable<Log[]> {

    //local storage
    if(localStorage.getItem('logs') === null) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem('logs'));

    }

    //return logs sorted by date
    return of(this.logs.sort((a,b) => {
      return b.date = a.date;
    }));
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(log: Log) {
    this.logs.unshift(log);

    //local storage
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  updateLog(log: Log){
    this.logs.forEach((current, index)=> {
      if(log.id === current.id) {
        this.logs.splice(index, 1)
      }
    });
    this.logs.unshift(log);

    //local storage update
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  deleteLog(log: Log){
    this.logs.forEach((current, index)=> {
      if(log.id === current.id) {
        this.logs.splice(index, 1)
      }
    });

    //local storage delete log
    localStorage.setItem('logs', JSON.stringify(this.logs));
  }

  clearState() {
    this.stateSource.next(true);
  }
}
