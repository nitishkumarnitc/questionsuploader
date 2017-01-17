import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Chapter} from "./chapter";

@Injectable()
export class IndexService {
  private _chaptersUrl="https://www.mistu.org/etutor/getchapters.php/"
  constructor(private _http:Http) { }
  getChapters():Observable<Chapter[]>{
      return this._http.get(this._chaptersUrl)
        .map((response:Response)=><Chapter[]> response.json())
        .do(data=>console.log("Chapetrs:"+ JSON.stringify(data)));
  }
}
