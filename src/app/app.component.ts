import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiUser } from './http.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list_u;
  users = [];

  constructor(private http: HttpClient, private apiUser: ApiUser) {}

  ngOnInit() {
    this.users = this.apiUser.getApiUser();
  }

  doPost() {
    let url = 'https://http-api.firebaseio.com/data.json';
    return this.http.post(url, this.users).subscribe(
      (res) => console.log(res),
      (error) =>  console.log(error)
    );
  }

  doGet() {
    return this.http.get('https://http-api.firebaseio.com/data.json').subscribe(
      (res) => console.log(res)
    );
  }

  doDelete() {
    let options = {id: '1'}
    return this.http.delete('https://http-api.firebaseio.com/data.json', {'params': options}).subscribe(
      (res) => console.log(res)
    )
  }

  doPut() {
    return this.http.put('https://http-api.firebaseio.com/data.json', {params: {description: 'Hello'}}).subscribe(res => console.log(res))
  }
}
