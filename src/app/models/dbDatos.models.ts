import { Bienvenida } from "./Bienvenida.models";
import { Proyecto } from "./Proyecto.models";
import { SobreMy } from "./SobreMy.models";

export class DB{
    bienvenida:Bienvenida;
    sobreMy:SobreMy;
    proyectos:Proyecto[];
}