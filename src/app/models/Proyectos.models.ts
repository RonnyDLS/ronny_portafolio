import { Parrafo } from "./Parrafo.models";
import { Tecnologia } from "./Tecnologia.models";
import { Url } from "./Url.models";
import { UrlDireccionesProyecto } from "./UrlDireccionesProyecto.moduls";


export class Proyecto{
    id:string;
    titulo:string;
    resumen_proyecto:string;
    informacion_proyecto:Parrafo[];
    urlDireccionesProyecto:UrlDireccionesProyecto[];  
    url_img_resume:string;
    urls_imagenes:Url[];
    tecnologias:Tecnologia[];
    destacado:boolean;
    colaboradores

}