import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { ProyectosComponent } from './components/vistaProyectos/proyectos/proyectos.component';
import { ProyectosDestacadosComponent } from './components/vistaProyectosDestacados/proyectos-destacados/proyectos-destacados.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ProyectoDestacadoMobileComponent } from './components/vistaProyectosDestacados/proyecto-destacado-mobile/proyecto-destacado-mobile.component';
import { ProyectoDestacadoDescripcionComponent } from './components/vistaProyectosDestacados/proyecto-destacado-descripcion/proyecto-destacado-descripcion.component';
import { ProyectoMobileComponent } from './components/vistaProyectos/proyecto-mobile/proyecto-mobile.component';
import { DescargaCurriculumModalComponent } from './components/descarga-curriculum-modal/descarga-curriculum-modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProyectoResumenComponent } from './components/vistaProyectos/proyecto-resumen/proyecto-resumen.component';
import { ProyectoDescripcionComponent } from './components/vistaProyectos/proyecto-descripcion/proyecto-descripcion.component';

export const routes: Routes = [
    {path: "nav", component:NavbarComponent}, 
    {path: "home", component:HomeComponent},
    {path: "bienvenida", component:BienvenidaComponent},
    {path: "proyectos_descripcion", component:ProyectoDescripcionComponent},
    {path: "proyectos_destacado_descripcion", component:ProyectoDestacadoDescripcionComponent},
    {path: "proyectos", component:ProyectosComponent},
    {path: "proyectos_destacados", component:ProyectosDestacadosComponent},
    {path: "proyectos_resumen", component:ProyectoResumenComponent},
    {path: "sobre_mi", component:SobreMiComponent},
    {path: "proyectos_mobile", component:ProyectoMobileComponent},
    {path: "proyectos_destacados_mobile", component:ProyectoDestacadoMobileComponent},
    {path: "descargaCurriculum", component:DescargaCurriculumModalComponent}
];
