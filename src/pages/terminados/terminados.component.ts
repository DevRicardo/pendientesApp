import { Component } from "@angular/core";
import { ActividadesService } from "../../services/actividades.service";
import { Lista } from "../../models";

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