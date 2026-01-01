import { Bienvenida } from "./Bienvenida.models";
import { EstiloConfig } from "./estilo.model";
import { Proyecto } from "./Proyectos.models";
import { SobreMy } from "./SobreMy.models";

export class DB{
    estilo: EstiloConfig;
    imagenes:string[];
    bienvenida:Bienvenida;
    sobreMy:SobreMy;
    proyectos:Proyecto[];
}