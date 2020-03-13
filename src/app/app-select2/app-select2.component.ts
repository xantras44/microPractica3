import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select2',
  templateUrl: './app-select2.component.html',
  styleUrls: ['./app-select2.component.scss']
})
export class AppSelect2Component implements OnInit {
  /*public Comunidades:Array<[string,number]>=[['Castilla',0],['Madrid',1]];
  public Comunidad:string="";
  public Provincia:string="";*/
  comunidades = ['Galicia', 'Cataluna'];
  provincias = []
  provinciasElegidas = {'Galicia': ['Lugo', 'Ourense'], 'Cataluna': ['Girona', 'Tarragona'],}
  //public a:string="";
  
  cambioComunidad(dato){
    this.provincias = this.provinciasElegidas[dato]
  }

  /*public getComunidades()
  {
    return this.Comunidades;
  }
  devolverProvincia() {
    
  }*/
  constructor() { }

  ngOnInit() {
  }

}
