/*Basic simple form*/
import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Atom} from "./atom";
import {NgUploaderOptions, NgUploaderService} from 'ngx-uploader';

@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css'],
  providers:[NgUploaderService]


})

export class AtomComponent implements OnInit {
  @Output() portionAdded=new EventEmitter<Atom[]>();
  @Input() baseImageUrl:string;
  @Input() id;
  atomsArray:Atom[]=[];
  atom:Atom=new Atom("",false,false,false);
  doneWithThisPortion:boolean=false;

  isImage:string="IsImage";
  isEquation:string="IsEquation";
  isText="IsText";

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: NgUploaderOptions = {
    url: 'http://www.mistu.org/etutor/uploadimages.php',
    data:"hello world"

  };
  sizeLimit = 2000000;

  constructor() { }

  ngOnInit() {
    console.log("Inside Atom: Base Image Url "+this.baseImageUrl);
  }

  onClickPlus(){
         if(this.atom.isText==true){
           console.log("Inside Atom Text");
           this.atomsArray.push(new Atom(this.atom.text,true,false,false));
           this.atom=new Atom("",false,false,false);
          // this.printAtomsArray();
         }else if(this.atom.isImage==true){
           console.log("Inside Image");
           this.atomsArray.push(new Atom(this.atom.text,false,true,false));
           this.atom=new Atom("",false,false,false);
          // this.printAtomsArray();
         }else if(this.atom.isEquation==true){
           console.log("Inside Equation");
           this.atomsArray.push(new Atom(this.atom.text,false,false,true));
           this.atom=new Atom("",false,false,false);
          //this.printAtomsArray();
         }
  }

  onFinalFormSubmission(){
    this.onClickPlus();
    this.doneWithThisPortion=true;
    this.portionAdded.emit(this.atomsArray);
  }


  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
      this.atom.text=data['originalName'];
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
