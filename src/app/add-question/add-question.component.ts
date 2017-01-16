import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  @Input() questionPortion:string;

  constructor() { }

  ngOnInit() {
  }



}
