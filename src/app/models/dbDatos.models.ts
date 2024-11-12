import { Bienvenida } from "./Bienvenida.models";
import { Proyecto } from "./Proyecto.models";
import { SobreMy } from "./SobreMy.models";

export class DB{
    imagenes:string[];
    bienvenida:Bienvenida;
    sobreMy:SobreMy;
    proyectos:Proyecto[];
}