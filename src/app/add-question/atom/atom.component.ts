import { Component, OnInit } from '@angular/core';
import {Atom} from "./atom";


@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css'],

})
export class AtomComponent implements OnInit {
  selectedRadioButton: string;

  textTypes = [
    'isImage',
    'isEquation',
    'isSimpleText'
  ];

  constructor() { }

  ngOnInit() {
  }

  atom:Atom;

  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://www.mistu.org/etutor/upload'
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
