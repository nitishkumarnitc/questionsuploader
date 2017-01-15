import { Component, OnInit } from '@angular/core';
import {Atom} from "./atom";

@Component({
  selector: 'app-atom',
  templateUrl: './atom.component.html',
  styleUrls: ['./atom.component.css']
})
export class AtomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private atom:Atom;

  favoriteSeason: string;

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
}
