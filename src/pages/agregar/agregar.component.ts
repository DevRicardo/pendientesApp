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

        if ( this.navParams.get('lista') ) {
            this.lista = this.navParams.get('lista');
        } else {
            this.lista = new Lista(titulo);
            this.actividadesService.agregarLista(this.lista);
        }

    }

    agregarItem() {
        if( this.nombreItem.length === 0 ){
            return;
        }
        
        const nuevoItem  = new ListaItem(this.nombreItem);
        this.lista.item.push(nuevoItem);

        this.actividadesService.guardarStorage();

        this.nombreItem = '';
    }

    actualizarTarea(item: ListaItem) {
        item.completado = !item.completado;

        const pendientes = this.lista.item.filter( itemData => {
            return !itemData.completado;
        }).length;

        console.log(pendientes);

        if ( pendientes === 0) {
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }else{
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }

        this.actividadesService.guardarStorage();
    }


    borrar(index: number) {
        this.lista.item.splice(index, 1);
        this.actividadesService.guardarStorage();
    }

}