import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class NameService {
     
    constructor(private http: Http) {

    }

    getTodos() {
        
    }
}