import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Chapter, Topic, Subject, Branch} from "./interfaces";

@Injectable()
export class IndexService {

  private homeUrl="http://www.mistu.org/etutor/";
  private _subjectsUrl=this.homeUrl+"getsubjects.php/";
  private _branchUrl=this.homeUrl+"getbranchesusingid.php/";
  private _chaptersUrl=this.homeUrl+"getchapters.php/";
  private _topicsUrl=this.homeUrl+"gettopics.php/";
  private _nextQuestionNumberUrl=this.homeUrl+"getnextquestionnumber.php/"
  private getsSuffix="?id="

  constructor(private _http:Http) { }

  getSubjects():Observable<Subject[]>{
    return this._http.get(this._subjectsUrl)
      .map((response:Response)=><Subject[]> response.json())
      .do(data=>console.log("Subjects:"+ JSON.stringify(data)));
  }

  getBranches(subjectId:number):Observable<Branch[]>{
    console.log("Get Branches called with url :"+this._branchUrl+this.getsSuffix+String(subjectId));
    return this._http.get(this._branchUrl+this.getsSuffix+String(subjectId))
      .map((response:Response)=><Branch[]> response.json())
      .do(data=>console.log("Subjects:"+ JSON.stringify(data)));
  }

  getChapters(branchId:number):Observable<Chapter[]>{
      return this._http.get(this._chaptersUrl+this.getsSuffix+String(branchId))
        .map((response:Response)=><Chapter[]> response.json())
        .do(data=>console.log("Chapters:"+ JSON.stringify(data)));
  }

  getTopics():Observable<Topic[]>{
    return this._http.get(this._topicsUrl)
      .map((response:Response)=><Topic[]> response.json())
      .do(data=>console.log("Topics:"+ JSON.stringify(data)));
  }

  getNextQuestionNumber():Observable<number>{
    return this._http.get(this._nextQuestionNumberUrl)
      .map((response:Response)=><number> response.json())
      .do(data=>console.log("NextQuestionNumber"+JSON.stringify(data)));
  }

}
