import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProductosService } from "../../providers/productos.service";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  productos:any[] = [];
  termino:string = undefined;

  constructor ( private _ar:ActivatedRoute, private _ps:ProductosService ) {

    _ar.params.subscribe ( parametros => {

      this.termino = parametros['termino'];
      console.log ( this.termino );
      _ps.buscar_producto (this.termino);

    })

  }






}
