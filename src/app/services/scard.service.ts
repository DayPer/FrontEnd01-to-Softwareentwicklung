import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, VirtualTimeScheduler } from 'rxjs';
import { creditcard } from '../models/creditcard';

@Injectable({
  providedIn: 'root'
})
export class ScardService {

  myAppUrl='http://localhost:3048/';
  myAPIUrl='api/Card/';

  list: creditcard[] = [];

  private updatecard = new BehaviorSubject<creditcard>({} as any);


  constructor(private http: HttpClient) { }

  saveCard(card: creditcard): Observable<creditcard>{
    return this.http.post<creditcard>(this.myAppUrl + this.myAPIUrl, card);
  }

  lookCard()
  {
    this.http.get(this.myAppUrl + this.myAPIUrl).toPromise()
    .then(data => {
    this.list = data as creditcard[];
    })
  }
  deleteCard(id: number): Observable<creditcard>
  {
    return this.http.delete<creditcard>(this.myAppUrl + this.myAPIUrl + id);
  }

  objectCard(card: creditcard){
    this.updatecard.next(card);
  }

  getCard(): Observable<creditcard>{
    return this.updatecard.asObservable();
  }

  updateCard(id: number=0, card: creditcard): Observable<creditcard>{
    return this.http.put<creditcard>(this.myAppUrl + this.myAPIUrl + id, card);
  }
}
