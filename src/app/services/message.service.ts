import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }
  sendMessage(body) {
    console.log(body);
    return this.http.post('http:localhost:4200/sendmail', body);
  }
}
