import { Component, Input } from "@angular/core";
import { ActividadesService } from "../../services/actividades.service";
import { Lista } from "../../models";
import { NavController } from "ionic-angular";
import { AgregarComponent } from "../../pages/agregar/agregar.component";


@Component({
    selector: 'app-lista',
    templateUrl: 'lista.component.html'
})
export class ListaComponent {

    @Input() completada: boolean =  false;

    constructor( 
        private actividadesService: ActividadesService,
        private navController: NavController) {
        
    }


    listaSelected(lista: Lista) {
        this.navController.push(AgregarComponent, {
           titulo: lista.titulo,
           lista: lista
         });
    }


    borrarLista(lista: Lista) {
        this.actividadesService.borrarLista(lista);
    }



}