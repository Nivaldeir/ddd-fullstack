export default class Name{
  private value: string;
  constructor(value:string){
    if(!this.validate(value)) throw new Error("Invalid name")
    this.value = value
  }
  private validate(name:string){
    return String(name).toLowerCase().match(/^[a-z]+\s([a-z]{1,})$/)
  }
  getValue(){
    return this.value
  }
}