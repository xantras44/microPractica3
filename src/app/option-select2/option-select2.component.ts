import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-select2',
  templateUrl: './option-select2.component.html',
  styleUrls: ['./option-select2.component.scss']
})
export class OptionSelect2Component {
  public Comunidades:Array<[string,number]>=[['Castilla',0],['Madrid',1]];
  public Comunidad:string="";
  public Provincia:string="";
  

  public getComunidades()
  {
    return this.Comunidades;
  }
}
