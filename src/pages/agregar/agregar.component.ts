import { Component } from "@angular/core";
import { ActividadesService } from "../../services/actividades.service";
import { NavParams } from "ionic-angular";
import { Lista } from "../../models";

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent {

   lista: Lista;

    constructor( 
        private actividadesService: ActividadesService,
        private navParams: NavParams) {
        
        const titulo = this.navParams.get('titulo');

        this.lista = new Lista(titulo);
    }

}