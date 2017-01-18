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
  atomsArray:Atom[]=[];
  atom:Atom=new Atom("",false,false,false);
  doneWithThisPortion:boolean=false;
  isImage:string="IsImage";
  isEquation:string="IsEquation";
  isText="IsText";

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://www.mistu.org/etutor/uploadimages.php'
  };
  sizeLimit = 2000000;

  constructor() { }

  ngOnInit() {
  }

  onClickPlus(){
         if(this.atom.isText==true){
           console.log("Inside Atom Text");
           this.atomsArray.push(new Atom(this.atom.text,true,false,false));
           this.atom=new Atom("",false,false,false);
           this.printAtomsArray();
         }else if(this.atom.isImage==true){
           console.log("Inside Image");
           this.atomsArray.push(new Atom(this.uploadFile['originalName'],false,true,false));
           this.atom=new Atom("",false,false,false);
           this.printAtomsArray();
         }else{
           console.log("Inside Equation");
           this.atomsArray.push(new Atom(this.atom.text,false,false,true));
           this.atom=new Atom("",false,false,false);
          this.printAtomsArray();
         }
  }
  // onClickOk(){
  //   this.onClickPlus();
  //   this.doneWithThisPortion=true;
  //   this.portionAdded.emit(this.atomsArray);
  // }

  onFinalFormSubmission(){
    this.onClickPlus();
    this.doneWithThisPortion=true;
    this.portionAdded.emit(this.atomsArray);
  }

  printAtomsArray(){
    console.log("Inside print Array Atom . "+"Size is"+ this.atomsArray.length);
    for(let atom of this.atomsArray){
        console.log("Printing Atoms array"+ "Text :"+ atom.text + "isText: "+ atom.isText + "isImage:"+ atom.isImage
        +"isEquation:"+atom.isEquation);
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
