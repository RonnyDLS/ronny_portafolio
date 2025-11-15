import { Parrafo } from './Parrafo.models';
import { Tecnologia } from './Tecnologia.models';
import { Url } from './Url.models';
import { UrlDireccionesProyecto } from './UrlDireccionesProyecto.moduls';

export class Proyecto {
  id: string;
  titulo: string;
  resumen_proyecto: string;
  informacion_proyecto: Parrafo[];
  urlDireccionesProyecto: UrlDireccionesProyecto[];
  url_img_resume: string;
  urls_imagenes: Url[];
  tecnologias: Tecnologia[];
  destacado: boolean;
  colaboradores: Colaboradores[];
  urls_videos:  Url[];
}

type Colaboradores = {
  nombre: string;
  apellido: string;
  url_img_perfil: string;
  perfil_letra: string;
  color_fondo_perfil: string;
};
