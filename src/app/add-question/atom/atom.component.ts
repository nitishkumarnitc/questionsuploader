/*Basic simple form*/

import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Atom} from "./atom";

@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css'],

})
export class AtomComponent implements OnInit {
  @Output() portionAdded=new EventEmitter<Atom[]>();
  selectedRadioButton: string;
  selectedText:string;
  atomsArray:Atom[]=[];
  doneWithThisPortion:boolean=false;

  textTypes = [
    'isImage',
    'isEquation',
    'isSimpleText'
  ];

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://localhost:10050/upload'
  };
  sizeLimit = 2000000;

  constructor() { }

  ngOnInit() {
  }

  onClickPlus(){
         if(this.selectedRadioButton=='isImage'){
           console.log("Inside image");
           let atom=new Atom(this.uploadFile['originalName'],this.selectedRadioButton);

           this.atomsArray.push(atom);
           this.selectedText=null;
           this.selectedRadioButton=null;
          this.printAtomClientsArray();

         }else{
           console.log("Inside image or euation");
            let atom=new Atom(this.selectedText,this.selectedRadioButton);
           this.atomsArray.push(atom);
           this.selectedText=null;
           this.selectedRadioButton=null;
            this.printAtomClientsArray();

         }
  }
  onClickOk(){
    this.onClickPlus();
    this.doneWithThisPortion=true;
    this.portionAdded.emit(this.atomsArray);
  }

  printAtomClientsArray(){
    console.log("Inside print Array Atom . "+"Size is"+ this.atomsArray.length);
    for(let atom of this.atomsArray){
        console.log("Printing clients array"+ "Text "+atom.text +"selectedType"+atom.selectedType);
    }
  }

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }

}
