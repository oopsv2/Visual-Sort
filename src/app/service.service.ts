import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private subject = new Subject<any>();

  constructor() { }

  sendMessage(percentage: number) {
    this.subject.next(percentage);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subject.next(false);
    this.subject.unsubscribe();
  }
}
