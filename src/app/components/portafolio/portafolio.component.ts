import { Component } from '@angular/core';
import  { ProductosService } from "../../providers/productos.service";

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent {

  constructor ( public _ps:ProductosService ) {

  }

}
