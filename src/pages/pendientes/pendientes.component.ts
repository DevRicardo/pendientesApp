import { Component } from "@angular/core";
import { ActividadesService } from "../../services/actividades.service";
import { Lista } from "../../models";
import { NavController, AlertController } from "ionic-angular";
import { AgregarComponent } from "../agregar/agregar.component";

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {

   
    constructor( 
        private actividadesService: ActividadesService,
        private navController: NavController,
        private alertController: AlertController
        ) {
        
    }

    listaSelected(lista: Lista) {
       
    }

    crearLista() {
        
        const alerta = this.alertController.create({
            title:'Nueva lista',
            message:'Nombre de la nueva lista',
            inputs:[{
                name: 'titulo',
                placeholder: 'Titulo de la lista',                
            }],
            buttons:[{
                text: 'Cancelar',
            }, {
                text: 'Agregar',
                handler: data => {

                    if (data.titulo.length === 0 ) {
                        return;
                    }
                    this.navController.push(AgregarComponent, {
                        titulo: data.titulo
                    });
                }
            }]
        });

        alerta.present();
    }

}