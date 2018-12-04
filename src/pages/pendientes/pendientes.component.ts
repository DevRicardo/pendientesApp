import { Component } from "@angular/core";
import { ActividadesService } from "../../services/actividades.service";

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {


    constructor( private actividadesService: ActividadesService) {

    }

}