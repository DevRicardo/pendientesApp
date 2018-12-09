import { Injectable } from "@angular/core";
import { Lista } from "../models";

@Injectable()
export class ActividadesService {

    listas: Lista[] = [];

    constructor() {
        /*const lista1 = new Lista("terminar curso de angular este año");
        const lista2 = new Lista("comenzar el curso de python en el año 2019");
        this.listas.push(lista1, lista2);
        console.log(this.listas);*/

        this.cargarStorage();
    }


    agregarLista(lista: Lista){
        this.listas.push(lista);
        this.guardarStorage();
    }

    
    borrarLista(lista: Lista) {
        this.listas = this.listas.filter( listaData => {
            return listaData.id !== lista.id;
        });

        this.guardarStorage();
    }

    guardarStorage() {

        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    cargarStorage() {
        if( localStorage.getItem('data') ){
            this.listas = JSON.parse(localStorage.getItem('data'));
        }else{
            this.listas = [];
        }
    }
}