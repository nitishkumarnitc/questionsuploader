import {Component, OnInit, ViewChild} from '@angular/core';
import {IndexService} from "./index.service";
import {Chapter, Subject, Branch, Topic} from "./interfaces";
import {AddQuestionComponent} from "./add-question/add-question.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[IndexService]
})
export class AppComponent implements OnInit{


  private subjects:Subject[]=[];
  private branches:Branch[]=[];
  private chapters:Chapter[]=[];
  private topics:Topic[]=[];
  private errorMessage: String;
  private statement="Statement";
  private option1="Option1";
  private option2="Option2";
  private option3="Option3";
  private option4="Option4";
  private solution="Solution";
  private problem=[];
  private problemToServer:any;
  private tempArray={};

  selectedSubjectId:number;
  selectedBranchName:string;
  selectedChapterId:number;
  selectedTopicId:number;
  baseImageResponse:any;
  finalResponseAfterUpload:any;



  @ViewChild('statementPortion') statementPortion:AddQuestionComponent;
  @ViewChild('optionOnePortion') optionOnePortion:AddQuestionComponent;
  @ViewChild('optionTwoPortion') optionTwoPortion:AddQuestionComponent;
  @ViewChild('optionThreePortion') optionThreePortion:AddQuestionComponent;
  @ViewChild('optionFourPortion') optionFourPortion:AddQuestionComponent;
  @ViewChild('solutionPortion') solutionPortion:AddQuestionComponent;

  ngOnInit(): void {
    this._indexService.getSubjects()
      .subscribe(subjects=>this.subjects=subjects, error=>this.errorMessage=<any>error);
  }

  constructor(private _indexService:IndexService){}
  title = 'Adding Question to Question Bank';

  addProblemandOtherFields(){
    this.problemToServer={'problem':this.tempArray,'topicOrder':this.baseImageResponse['problemNumber']
    , 'topicId':this.selectedTopicId};

     this.printProblemToServer(this.problemToServer);
  }

  printProblemToServer(problemToServer){
    console.log("Problem : "+JSON.stringify(problemToServer));
  }

  handleQuestionsPortionAdded(){
   // this.problem.push(keyValuePair);
      //this.problem.push({'baseImageUrl':this.baseImageResponse['baseImageUrl']});
      this.tempArray['baseImageUrl']=this.baseImageResponse['baseImageUrl'];
      this.addProblemandOtherFields();
      this.uploadQuestionToServer();


  }

  uploadQuestionToServer(){
    // this.printProblem(this.problemToServer);
    console.log("Question to be uploaded"+JSON.stringify(this.problemToServer));

    this._indexService.uploadQuestionToServer(this.problemToServer)
      .subscribe(response=>this.finalResponseAfterUpload=response,error=>this.errorMessage=<any>error);
  }

  subjectSelected(subjectId){
    console.log("Subject Selected id is : "+subjectId);
    this._indexService.getBranches(subjectId)
      .subscribe(branches=>this.branches=branches,error=>this.errorMessage=<any>error);
  }

  branchSelected(branchName){
    console.log("Branch Name Selected id is :" +branchName);
    this._indexService.getChapters(branchName)
      .subscribe(chapters=>this.chapters=chapters, error=>this.errorMessage=<any>error);
  }

  chapterSelected(chapterId){
    console.log("Chapter Selected id is : "+chapterId);
    this._indexService.getTopics(chapterId)
      .subscribe(topics=>this.topics=topics,error=>this.errorMessage=<any> error);
  }

  topicSelected(topicId){
    console.log("Topic selected id is : "+topicId);
    this._indexService.getBaseImageResponse(topicId)
      .subscribe(baseImageResponse=>this.baseImageResponse=baseImageResponse,error=>this.errorMessage=<any> error);
  }


  requestComponentsToSendData(){
    this.statementPortion.callAtomComponentEventEmittor();
    this.optionOnePortion.callAtomComponentEventEmittor();
    this.optionTwoPortion.callAtomComponentEventEmittor();
    this.optionThreePortion.callAtomComponentEventEmittor();
    this.optionFourPortion.callAtomComponentEventEmittor();
    this.solutionPortion.callAtomComponentEventEmittor();
  }



  // printProblem(problem){
  //   console.log("Trying to Print Problem to be sent");
  //   console.log(JSON.stringify(problem));
  // }

}

