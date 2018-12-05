import { Component } from "@angular/core";
import { ActividadesService } from "../../services/actividades.service";
import { Lista } from "../../models";
import { NavController } from "ionic-angular";
import { AgregarComponent } from "../agregar/agregar.component";

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {

   
    constructor( 
        private actividadesService: ActividadesService,
        private navController: NavController
        ) {
        
    }

    listaSelected(lista: Lista) {
        console.log(lista);
    }

    crearLista() {
        this.navController.push(AgregarComponent);
    }

}