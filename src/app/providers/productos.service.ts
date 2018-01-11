import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProductosService {

  productos:any[] = [];
  productos_filtrado:any[] = [];
  cargando:boolean = false;
  producto:any;

  constructor( public http:Http ) {

    this.cargar_productos ();

  }

  buscar_producto ( termino:string) {

    if ( this.productos.length === 0 ) {
      this.cargar_productos().then ( ()=> {
        // terminó la carga
        this.filtrar_productos (termino);
      })
    } else {
      this.filtrar_productos (termino);
    }

  }

  private filtrar_productos ( termino:string ){

    this.productos_filtrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach ( prod => {

      if ( prod.categoria.indexOf (termino) >=0 ||
              prod.titulo.toLowerCase().indexOf (termino) >=0) {
        this.productos_filtrado.push( prod )
      }
    })

    //console.log(this.productos_filtrado);


  }

  public cargar_productos () {

    this.cargando = true;

    let promesa = new Promise ( (resolve,reject)  => {

    this.http.get ("https://portfolio-77e1b.firebaseio.com/productos_idx.json")
      .subscribe ( res => {

        setTimeout ( () => {
          this.productos = res.json();
          this.cargando = false;
          resolve();
        },1500 );

      })

    })
    return promesa;

  }

  public cargar_producto (cod:string) {

      return this.http.get (`https://portfolio-77e1b.firebaseio.com/productos/${ cod }.json`)

  }


}
