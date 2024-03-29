import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CaninoComponent } from './components/canino/canino.component';
import { DonacionesComponent } from './components/donaciones/donaciones.component';
import { DonacionesPublicComponent } from './components/donaciones-public/donaciones-public.component';
import { FormularioAdopcionComponent } from './components/formulario-adopcion/formulario-adopcion.component';
import { AdminDetalleEventoComponent } from "./components/admin-detalle-evento/admin-detalle-evento.component";
import { AdmindEventoComponent } from "./components/admind-evento/admind-evento.component";
import { RequisitosComponent } from './components/requisitos/requisitos.component';
import { LocalidadesComponent } from './components/localidades/localidades.component';
import { Categoria_donacionComponent } from './components/categoria-donacion/categoria-donacion.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { AdminDetalleCaninoComponent } from './components/admin-detalle-canino/admin-detalle-canino.component'
import { CaninoPublicComponent } from './components/canino-public/canino-public.component';
import { DetalleCaninoPublicComponent } from './components/detalle-canino-public/detalle-canino-public.component';
import { EventoComponent } from './components/evento/evento.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { RequisitosPublicComponent } from './components/requisitos-public/requisitos-public.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FormularioAdopcionPublicComponent } from './components/formulario-adopcion-public/formulario-adopcion-public.component';
import { NavegacionPublicComponent } from './components/navegacion-public/navegacion-public.component';
import { AdminNavegacionComponent } from './components/admin-navegacion/admin-navegacion.component';
import { TiendaHomeComponent } from './components/tienda-home/tienda-home.component';
import { AdminCategoriaTiendaComponent } from './components/admin-categoria-tienda/admin-categoria-tienda.component';
import { AdminProductosTiendaComponent } from './components/admin-productos-tienda/admin-productos-tienda.component';
import { AdminDetalleProductosComponent } from './components/admin-detalle-productos/admin-detalle-productos.component';
import { DetalleProductoPublicComponent } from './components/detalle-producto-public/detalle-producto-public.component';
import { EventoDetalleComponent } from './components/evento-detalle/evento-detalle.component';

import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {
    path:'', redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'canino', 
    component:CaninoComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'form-adopcion/:numero', 
    component:FormularioAdopcionComponent
  },
  {
    path:'admin-evento',
    component:AdmindEventoComponent
  },
  {
    path:'admin-producto',
    component:AdminProductosTiendaComponent
  },
  {
    path:'admin-detalle-producto/:id_productos',
    component:AdminDetalleProductosComponent
  },

  {
    path:'evento-detalle/:id_evento',
    component:EventoDetalleComponent
  },
  {
    path:'admin-detalle-evento/:id_evento',
    component:AdminDetalleEventoComponent
  },
  {
    path:'admin-detalle-canino/:id_canino',
    component:AdminDetalleCaninoComponent
  },
  {
    path:'donaciones', 
    component:DonacionesComponent
  },

  {
    path:'formulario-public', 
    component:FormularioAdopcionPublicComponent 
  },

 
  {
    path:'dona', 
    component:DonacionesPublicComponent
  },
    {
    path:'contacto', 
    component:ContactoComponent
  },
  {
    path:'localidades', 
    component:LocalidadesComponent
  },
  {
    path:'provincia', 
    component:ProvinciaComponent
  },
  {
    path:'categoria-donaciones', 
    component:Categoria_donacionComponent
  },
  {
    path:'requisitos', 
    component:RequisitosComponent
  },
  {
    path:'nuestros-eventos', 
    component:EventoComponent
  },
  {
    path:'detalle-jordan/:id_canino', 
    component:DetalleCaninoPublicComponent
  },
  {
    path:'detalle-producto/:id_productos', 
    component:DetalleProductoPublicComponent
  },
  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:'nuestros-jordanes', 
    component:CaninoPublicComponent
  },
  {
    path:'registro', 
    component:RegistroComponent
  },
  {
    path:'nosotros',
    component:NosotrosComponent
  },
  {
    path:'ingreso', 
    component:IngresoComponent
  },
  {
    path:'requisitos-adopcion', 
    component:RequisitosPublicComponent
  },
  {

  path:'tienda-home',
  component:TiendaHomeComponent
 
  },
  {

  path:'categoria_tienda',
  component:AdminCategoriaTiendaComponent
 
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
