import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from '../app/components/categorias/categorias.component';
import {HomeComponent} from '../app/components/home/home.component';
import { QuejasComponent } from '../app/components/quejas/quejas.component'
import { GraciasComponent } from '../app/components/gracias/gracias.component'

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'categorias',component: CategoriasComponent},
  {path:'quejas',component:QuejasComponent},
  {path:'gracias',component:GraciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
