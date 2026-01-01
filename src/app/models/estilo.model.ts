export interface EstiloConfig {
  temas: TemaConfig[];
}

export interface TemaConfig {
  nombreTema: string;
  navbar: SeccionBase & {
    elementos: ElementoNavbar[];
  };
  home: SeccionBase & {
    elementos: ElementoHome[];
  };
  proyecto: {
    listaProyectos: SeccionBase & {
      elementos: ElementoListaProyectos[];
    };
    resumenProyecto: SeccionBase & {
      elementos: ElementoResumenProyecto[];
    };
  };
  proyectoDescripcion: SeccionBase & {
    elementos: ElementoProyectoDescripcion[];
  };
  sobreMi: SeccionBase & {
    elementos: ElementoSobreMi[];
  };
  cv: SeccionBase & {
    colorLinea: string;
    elementos: ElementoCV[];
  };
}

/* ---------------------- */
/*   BASES REUTILIZABLES  */
/* ---------------------- */

export interface SeccionBase {
  fuente: string;
  colorTxt: string;
  colorFondo: string;
}

export interface ElementoBase {
  nombre: string;
  fuente?: string;
  colorTxt?: string;
  colorFondo?: string;
  colorFondo2?: string;
  colorLinea?: string;
  colorLinea2?: string;
  url?: string;
}

/* ---------------------- */
/*   ELEMENTOS ESPECÍFICOS */
/* ---------------------- */

export type ElementoNavbar =
  | ElementoBase
  | {
      nombre: 'boton';
      colorFondo: string;
      colorTxt: string;
      colorLinea: string;
    }
  | {
      nombre: 'imagen_perfil';
      colorLinea: string;
    }
  | {
      nombre: 'icon_descarga';
      url: string;
    };

export type ElementoHome =
  | {
      nombre: 'etiqueta';
      colorFondo: string;
      fuente: string;
      colorTxt: string;
    }
  | {
      nombre: 'imagen_hola' | 'imagen_dev';
      url: string;
    };

export type ElementoListaProyectos =
  | {
      nombre: 'tarjeta_lista_proyectos';
      colorFondo: string;
      fuente: string;
      colorTxt: string;
      colorLinea: string;
    }
  | {
      nombre: 'item_lista_proyectos';
      colorFondo: string;
      colorFondo2: string;
      fuente: string;
      colorTxt: string;
      colorLinea: string;
      colorLinea2: string;
    };

export type ElementoResumenProyecto =
  | {
      nombre: 'titulo' | 'sub_titulo';
      fuente: string;
      colorTxt: string;
    }
  | {
      nombre: 'imagen_resumen';
      colorLinea: string;
      url: string;
    }
  | {
      nombre: 'boton';
      colorFondo: string;
      colorFondo2: string;
      fuente: string;
      colorTxt: string;
      colorLinea: string;
    };

export type ElementoProyectoDescripcion =
  | {
      nombre: 'titulo' | 'titulo_categoria' | 'sub_titulo';
      fuente: string;
      colorTxt: string;
    }
  | {
      nombre: 'tarjeta_item_colaboradores';
      colorFondo: string;
      fuente: string;
      colorTxt: string;
      colorLinea: string;
    }
  | {
      nombre: 'boton';
      colorFondo: string;
      fuente: string;
      colorTxt: string;
      colorLinea: string;
    }
  | {
      nombre: 'tarjeta_multimedia';
      colorFondo: string;
      colorLinea: string;
    }
  | {
      nombre: 'multimedia_barras_laterales';
      colorFondo: string;
    }
  | {
      nombre: 'item_tarjeta_multimedia';
      colorLinea: string;
    };

export type ElementoSobreMi = {
  nombre: 'etiqueta' | 'tarjeta_info_conocimientos';
  colorFondo: string;
  fuente: string;
  colorTxt: string;
  colorLinea: string;
};

export type ElementoCV = {
  nombre: 'boton_cancelar' | 'boton_descargar';
  colorFondo: string;
  colorFondo2: string;
  fuente: string;
  colorTxt: string;
  colorLinea: string;
};
