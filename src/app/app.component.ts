import {Component, OnInit} from '@angular/core';
import {IndexService} from "./index.service";
import {Chapter} from "./chapter";
import {Molecule} from "./add-question/molecule";
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
  private problem:Molecule[]=[];

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

  handleMoleculeRecieved(molecule){
    this.problem.push(molecule);
    this.printProblem(this.problem);

  }

  printProblem(problem){
    console.log("Trying to Print Problem");
    for(let molecule of problem){
      console.log(molecule.portionType);
      for(let atom of molecule.portion){
        console.log("Text:" +atom.text + "Selected Type :"+atom.selectedType);
      }
    }
  }

}

