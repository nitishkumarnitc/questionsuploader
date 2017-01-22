import { Injectable } from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Chapter, Topic, Subject, Branch} from "./interfaces";

@Injectable()
export class IndexService {

  private homeUrl="http://www.mistu.org/etutor/";
  private _subjectsUrl=this.homeUrl+"getsubjects.php/";
  private _branchUrl=this.homeUrl+"getbranchesusingid.php/";
  private _chaptersUrl=this.homeUrl+"getchapters.php/";
  private _topicsUrl=this.homeUrl+"gettopicsbychapterid.php/";
  private _getBaseImageResponse=this.homeUrl+"getbaseimageresponse.php/";
  private _uploadQuestionUrl=this.homeUrl+"uploadquestion.php/";
  private getsSuffix="?id=";
  private branchGetsSuffix="?branch=";

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

  getChapters(branchName:number):Observable<Chapter[]>{
      return this._http.get(this._chaptersUrl+this.branchGetsSuffix+String(branchName))
        .map((response:Response)=><Chapter[]> response.json())
        .do(data=>console.log("Chapters:"+ JSON.stringify(data)));
  }

  getTopics(chapterId:number):Observable<Topic[]>{
    return this._http.get(this._topicsUrl+this.getsSuffix+String(chapterId))
      .map((response:Response)=><Topic[]> response.json())
      .do(data=>console.log("Topics:"+ JSON.stringify(data)));
  }

  /*Returns base image url(path) by creating appropriate directory on server , question number that is going to be addedd */
  getBaseImageResponse(topicId:number):Observable<any>{
    return this._http.get(this._getBaseImageResponse+this.getsSuffix+String(topicId))
      .map((response:Response)=><any> response.json())
      .do(data=>console.log("NextQuestionNumber"+JSON.stringify(data)));
  }

  /*Insert question to data-base*/
  uploadQuestionToServer(problem):Observable<any>{
    let headers = new Headers();
    headers.append('Content-Type',
      'application/json');
    return this._http.post(this._uploadQuestionUrl,JSON.stringify(problem),headers)
      .map((response:Response)=><any> response.json())
      .do(data=>console.log("Status of Question Uploaded"+JSON.stringify(data)));
  }

}
