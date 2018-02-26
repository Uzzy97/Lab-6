import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http){}

  GetStudentData(): Observable<any>{
    return this.http.get("https://www.jsonblob.com/api/jsonblob/e46ffbad-1b14-11e8-8015-c9ff17e16859")
    .map(obs => obs.json());


  }

}
