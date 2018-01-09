import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html'
})
export class PortfolioItemComponent {

  constructor ( private _ar:ActivatedRoute ) {

    _ar.params.subscribe ( parametros => {
      console.log (parametros);
      console.log (parametros['id']);
    })

  }
}
