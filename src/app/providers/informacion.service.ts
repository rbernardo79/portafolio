import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {}
  cargada:boolean = false;
  cargadaSobreNosotros:boolean = false;
  equipo:any[] = [];

  constructor(public http:Http) {

    this.carga_info ();
    this.carga_sobre_nosotros ();

  }

  public carga_info () {

    this.http.get("assets/data/info.pagina.json")
      .subscribe ( data => {
          this.cargada = true;
          this.info = data.json();
      })


  }

  public carga_sobre_nosotros () {

    this.http.get("https://portfolio-77e1b.firebaseio.com/equipo.json")
      .subscribe ( data => {
          this.cargadaSobreNosotros = true;
          this.equipo = data.json();
      })

  }



}
