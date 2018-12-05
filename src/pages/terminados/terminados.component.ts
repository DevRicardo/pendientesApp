import { Component } from "@angular/core";
import { Lista } from "../../models";
import { ActividadesService } from "../../services/actividades.service";

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosComponent {


    constructor( private actividadesService: ActividadesService) {
        
    }

    listaSelected(lista: Lista) {
        console.log(lista);
    }

}