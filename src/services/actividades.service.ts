import { Injectable } from "@angular/core";
import { Lista } from "../models";

@Injectable()
export class ActividadesService {

    listas: Lista[] = [];

    constructor() {
        const lista1 = new Lista("terminar curso de angular este año");
        const lista2 = new Lista("comenzar el curso de python en el año 2019");

        this.listas.push(lista1, lista2);

        console.log(this.listas);
    }
}