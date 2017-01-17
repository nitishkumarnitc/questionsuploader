import {Atom} from "./atom/atom";
export class Molecule {

  public portionType:string;
  public portion: Atom[];
  constructor(portionType: string, portion: Atom[]) {
    this.portionType=portionType;
    this.portion=portion;
  }
}
