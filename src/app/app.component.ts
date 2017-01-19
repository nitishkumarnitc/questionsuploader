import {Component, OnInit, ViewChild} from '@angular/core';
import {IndexService} from "./index.service";
import {Chapter, Subject, Branch} from "./interfaces";
import {AddQuestionComponent} from "./add-question/add-question.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[IndexService]
})
export class AppComponent implements OnInit{

  private chapters:Chapter[]=[];
  private subjects:Subject[]=[];
  private branches:Branch[]=[];
  private errorMessage: String;
  private statement="Statement";
  private option1="Option1";
  private option2="Option2";
  private option3="Option3";
  private option4="Option4";
  private solution="Solution";
  private problem=[];

  selectedSubjectId:number;
  selectedBranchId:number;


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

  handleQuestionsPortionAdded(keyValuePair){
    this.problem.push(keyValuePair);
    this.printProblem(this.problem);

  }

  subjectSelected(subjectId){
    console.log("Subject Selected id is : "+subjectId);
    this._indexService.getBranches(subjectId)
      .subscribe(branches=>this.branches=branches,error=>this.errorMessage=<any>error);
  }

  requestComponentsToSendData(){
    this.statementPortion.callAtomComponentEventEmittor();
    this.optionOnePortion.callAtomComponentEventEmittor();
    this.optionTwoPortion.callAtomComponentEventEmittor();
    this.optionThreePortion.callAtomComponentEventEmittor();
    this.optionFourPortion.callAtomComponentEventEmittor();
    this.solutionPortion.callAtomComponentEventEmittor();
  }

  printProblem(problem){
    console.log("Trying to Print Problem at Dada Level");
    for(let keyValuePair of problem){
      console.log(JSON.stringify(keyValuePair));
    }
  }

}

