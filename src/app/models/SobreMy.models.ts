import { Conocimiento } from "./Conocimiento.models";
import { Parrafo } from "./Parrafo.models";
import { Redes } from "./Redes.models";

export class SobreMy{
    nombre:string;
    especialidad:string;
    tituloSobreMy:string;
    misRedes:Redes[];
    conocimientos:Conocimiento[];
    infoSobreMy:Parrafo[];
}