import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ProyectoDescripcionComponent } from './proyecto-descripcion/proyecto-descripcion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectosDestacadosComponent } from './proyectos-destacados/proyectos-destacados.component';
import { ProyectoResumenComponent } from './proyecto-resumen/proyecto-resumen.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ProyectoDestacadoMobileComponent } from './proyecto-destacado-mobile/proyecto-destacado-mobile.component';
import { ProyectoDestacadoDescripcionComponent } from './proyecto-destacado-descripcion/proyecto-destacado-descripcion.component';
import { ProyectoMobileComponent } from './proyecto-mobile/proyecto-mobile.component';
import { DescargaCurriculumModalComponent } from './descarga-curriculum-modal/descarga-curriculum-modal.component';
import { NavbarComponent } from './navbar/navbar.component';

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
