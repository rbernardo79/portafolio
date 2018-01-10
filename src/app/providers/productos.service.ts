import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  cargando:boolean = false;
  producto:any;

  constructor( public http:Http ) {

    this.cargar_productos ();

  }

  public cargar_productos () {

    this.cargando = true;

    if ( this.productos.length === 0 ) {

      this.http.get ("https://portfolio-77e1b.firebaseio.com/productos_idx.json")
        .subscribe ( res => {

          setTimeout ( () => {
            this.productos = res.json();
            this.cargando = false;
          },1500 );

        })

    }

  }

  public cargar_producto (cod:string) {

      return this.http.get (`https://portfolio-77e1b.firebaseio.com/productos/${ cod }.json`)

  }


}
