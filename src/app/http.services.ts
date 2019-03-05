import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiUser {
    private apiUser = [
        {
            name: 'Kevin',
            id: '1',
            fullname: 'Kevin Systrom'
        },
        {
            name: 'Jamala',
            id: '2',
            fullname: 'Jamala'
        }
    ];

    constructor(private http: HttpClient) {}

    getApiUser() {
        return this.apiUser;
    }

}