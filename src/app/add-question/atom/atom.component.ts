import { Component, OnInit } from '@angular/core';
import {AtomClient} from "./atom-client";


@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css'],

})
export class AtomComponent implements OnInit {



  selectedRadioButton: string;
  selectedText:string;
  atomClient:AtomClient;
  // atomClientsArray:Array<AtomClient>;
  atomClientsArray:AtomClient[]=[];
  onClickPlus(){

          console.log("pushing object to clientAtomArray");
          let tempAtom=new AtomClient("Nitish","Image");
         console.log("Value of object to be pushed is "+tempAtom.selectedType+tempAtom.text);
         this.atomClientsArray.push(tempAtom);;

         // this.atomClientsArray.push(new AtomClient("Nitish","Image"));
          console.log("Array size is"+String(this.atomClientsArray.length));
         //
         // //console.log("onClickPlus called "+JSON.stringify(this.uploadFile['originalName'])+this.selectedRadioButton);
         // console.log("onClickPlus called "+this.uploadFile['originalName']+this.selectedRadioButton);
         //
         // if(this.selectedRadioButton=='isImage'){
         //   console.log("Inside image");
         //   let atomClientTemp=new AtomClient(this.uploadFile['originalName'],this.selectedRadioButton);
         //   console.log("atom client created"  + atomClientTemp.text  + atomClientTemp.selectedType);
         //   this.atomClientsArray.push(atomClientTemp);
         //   //this.printAtomClientsArray();
         //
         //   // console.log("Inside printClients Array, Size is :" + String(this.atomClientsArray.length));
         //   console.log("Inside printClients Array, Size is :");
         //
         //
         //   for(let atomClient of this.atomClientsArray){
         //     console.log("Printing clients array"+atomClient);
         //   }
         //   //console.log("Printing atomClientsArray:" + "Type:"+this.atomClientsArray[0].selectedType + "Text:"+this.atomClientsArray[0].text);
         // }else{
         //    let atomClientTemp=new AtomClient(this.selectedText,this.selectedRadioButton);
         //    this.atomClientsArray.push(atomClientTemp);
         //   //console.log("Printing atomClientsArray:" + "Type:"+this.atomClientsArray[0].selectedType + "Text:"+this.atomClientsArray[0].text);
         // }
  }

  printAtomClientsArray(){
    console.log("Inside printClients Array"+"Size is"+ this.atomClientsArray.length);
    for(let atomClient of this.atomClientsArray){
        console.log("Printing clients array"+atomClient);
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
