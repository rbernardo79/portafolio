import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { ProductosService } from "../../providers/productos.service";

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html'
})
export class PortfolioItemComponent {

  producto:any = undefined;
  parametro:string = undefined;

  constructor ( public _ar:ActivatedRoute, public _ps:ProductosService ) {

    _ar.params.subscribe ( parametros => {

      _ps.cargar_producto (parametros['id'])
        .subscribe ( res => {

          this.parametro = parametros['id'];
          this.producto = res.json();
          //console.log ( this.producto );
        })

    })

  }
}
