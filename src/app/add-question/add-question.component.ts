import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {AtomComponent} from "./atom/atom.component";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})

export class AddQuestionComponent implements OnInit {
  @Input() questionPortion:string;
  @Input() baseImageUrl:string;
  @Output() questionsPortionAdded=new EventEmitter<any>();
  @ViewChild('atomChild') atomChild:AtomComponent;
  portionsJsonObject:any;

  constructor() { }

  ngOnInit() {

    console.log("Base Image Url :"+this.baseImageUrl);
  }

  callAtomComponentEventEmittor(){
    this.atomChild.onFinalFormSubmission();
  }

  handlePortionAdded(input){
    console.log("Inside Add-question");
    this.formPortionsJsonObject(input);

    //this.printPortionArray(input);
    //this.printJsonPortionArray();
    this.questionsPortionAdded.emit(this.portionsJsonObject);
  }



  formPortionsJsonObject(input){
    if(this.questionPortion=="Statement"){
      this.portionsJsonObject={"Statement":input};
    }else if(this.questionPortion=="Option1"){
      this.portionsJsonObject={"Option1":input};
    }else if(this.questionPortion=="Option2"){
      this.portionsJsonObject={"Option2":input};
    } else if(this.questionPortion=="Option3"){
      this.portionsJsonObject={"Option3":input};
    } else if(this.questionPortion=="Option4"){
      this.portionsJsonObject={"Option4":input};
    } else if(this.questionPortion=="Solution"){
      this.portionsJsonObject={"Solution":input};
    }
  }

  // printPortionArray(input){
  //   console.log("Inside printing portionArray . "+"Size is"+ input.length);
  //   for(let atom of input) {
  //     console.log("Text " + atom.text + "IsImage: "+ atom.isImage +" IsEquation " +atom.isEquation
  //     +" IsText : "+atom.isText);
  //   }
  // }

  // printJsonPortionArray(){
  //   console.log("Inside printing JsonPortion");
  //   for(let atom of this.portionsJsonObject[this.questionPortion]){
  //     console.log("Text "+ atom['text'] + "IsImage "+ atom['isImage'] + "IsEquation" +atom['isEquation']
  //   + "IsText" + atom['isText']);
  //   }
  // }

}
