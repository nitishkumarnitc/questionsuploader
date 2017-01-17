export class AtomClient {
  // constructor(
  //   public text:string,
  //   public selectedType:string
  //   ) {}

  public text:string;
  public selectedType: string;
  constructor(text: string, selectedType: string) {
    this.selectedType = selectedType;
    this.text = text;
  }
}
