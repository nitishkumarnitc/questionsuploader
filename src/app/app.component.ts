import {Component, OnInit} from '@angular/core';
import {IndexService} from "./index.service";
import {Chapter} from "./chapter";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[IndexService]
})
export class AppComponent implements OnInit{

  private chapters:Chapter[];
  private errorMessage: String;
  private statement="Statement";
  private option1="Option1";
  private option2="Option2";
  private option3="Option3";
  private option4="Option4";
  private solution="Solution";
  private problem=[];

  ngOnInit(): void {
    this._indexService.getChapters()
      .subscribe(chapters=>this.chapters=chapters, error=>this.errorMessage=<any>error);
  }

  constructor(private _indexService:IndexService){}
  title = 'Adding Question to Question Bank';

  selectedChapter: Chapter;

  onSelect(chapter: Chapter): void {
    this.selectedChapter = chapter;
  }

  handleQuestionsPortionAdded(keyValuePair){
    this.problem.push(keyValuePair);
    this.printProblem(this.problem);

  }

  printProblem(problem){
    console.log("Trying to Print Problem at Dada Level");
    for(let keyValuePair of problem){
      console.log(JSON.stringify(keyValuePair));
    }
  }

}

