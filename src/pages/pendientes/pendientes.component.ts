import { Component } from "@angular/core";
import { ActividadesService } from "../../services/actividades.service";
import { List } from "ionic-angular";
import { Lista } from "../../models";

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {

   
    constructor( private actividadesService: ActividadesService) {
        
    }

    listaSelected(lista: Lista) {
        console.log(lista);
    }

}