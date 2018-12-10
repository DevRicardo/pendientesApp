import { Component, Input } from "@angular/core";
import { ActividadesService } from "../../services/actividades.service";
import { Lista } from "../../models";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { AgregarComponent } from "../../pages/agregar/agregar.component";


@Component({
    selector: 'app-lista',
    templateUrl: 'lista.component.html'
})
export class ListaComponent {

    @Input() completada: boolean =  false;

    constructor( 
        private actividadesService: ActividadesService,
        private navController: NavController,
        private alertController: AlertController) {
        
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

    editarLista(lista: Lista, itemSliding: ItemSliding) {
        
        itemSliding.close();
        
        const alerta = this.alertController.create({
            title:'Editar',
            message:'Editar nombre de la lista',
            inputs:[{
                name: 'titulo',
                placeholder: 'Titulo de la lista',  
                value: lista.titulo              
            }],
            buttons:[{
                text: 'Cancelar',
            }, {
                text: 'Guardar',
                handler: data => {

                    if (data.titulo.length === 0 ) {
                        return;
                    }
                    lista.titulo =  data.titulo;
                    this.actividadesService.guardarStorage();
                }
            }]
        });

        alerta.present();
    }



}