import { Component } from "@angular/core";
import { ActividadesService } from "../../services/actividades.service";
import { NavParams } from "ionic-angular";
import { Lista, ListaItem } from "../../models";

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarComponent {

   lista: Lista;
   nombreItem: string = '';

    constructor( 
        private actividadesService: ActividadesService,
        private navParams: NavParams) {
        
        const titulo = this.navParams.get('titulo');

        this.lista = new Lista(titulo);
    }

    agregarItem() {
        if( this.nombreItem.length === 0 ){
            return;
        }
        
        const nuevoItem  = new ListaItem(this.nombreItem);
        this.lista.item.push(nuevoItem);

        this.nombreItem = '';
    }

    actualizarTarea(item: ListaItem) {
        item.completado = !item.completado;
    }

}