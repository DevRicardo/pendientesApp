import { Component } from "@angular/core";
import { ActividadesService } from "../../services/actividades.service";

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent {

   
    constructor( private actividadesService: ActividadesService) {
        
    }

}