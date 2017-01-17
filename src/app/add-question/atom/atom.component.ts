import { Component, OnInit } from '@angular/core';
import {Atom} from "./atom";



@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css'],

})
export class AtomComponent implements OnInit {



  selectedRadioButton: string;
  selectedText:string;
  atomsArray:Atom[]=[];
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

  printAtomClientsArray(){
    console.log("Inside printClients Array"+"Size is"+ this.atomsArray.length);
    for(let atom in this.atomsArray){
        console.log("Printing clients array"+atom);
    }
  }


  textTypes = [
    'isImage',
    'isEquation',
    'isSimpleText'
  ];



  constructor() { }

  ngOnInit() {
  }

  uploadFile: any;


  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://www.mistu.org/etutor/uploadimages.php/'
  };
  sizeLimit = 2000000;

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
