import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Molecule} from "./molecule";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @Input() questionPortion:string;
  @Output() moleculeFormed=new EventEmitter<Molecule>();

  constructor() { }

  ngOnInit() {
  }

  handlePortionAdded(input){
    console.log("Inside Add-question");
    this.printPortionArray(input);
  }

  printPortionArray(input){
    console.log("Inside print Array Atom . "+"Size is"+ input.length);
    for(let atom of input){
      console.log("Printing clients array"+ "Text "+atom.text +"selectedType"+atom.selectedType);
    }
    let molecule=new Molecule(this.questionPortion,input);
    this.moleculeFormed.emit(molecule);
  }

}
