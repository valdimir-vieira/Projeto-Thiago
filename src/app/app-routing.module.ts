import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaoComponent } from './acao/acao.component';
import { AventuraComponent } from './aventura/aventura.component';
import { ComediaComponent } from './comedia/comedia.component';
import { DesenhoComponent } from './desenho/desenho.component';
import { DocumentarioComponent } from './documentario/documentario.component';
import { DramaComponent } from './drama/drama.component';
import { FaroesteComponent } from './faroeste/faroeste.component';
import { FiccaoComponent } from './ficcao/ficcao.component';
import { GuerraComponent } from './guerra/guerra.component';
import { HomeComponent } from './home/home.component';
import { TerrorComponent } from './terror/terror.component';


const routes: Routes = [
    {
    path: 'acao',
    component: AcaoComponent,
  },
  {
    path: 'aventura',
    component: AventuraComponent
  },
  {
    path: 'comedia',
    component: ComediaComponent
  },
  {
    path: 'desenho',
    component: DesenhoComponent
  },
  {
    path: 'documentario',
    component: DocumentarioComponent
  },
  {
    path: 'drama',
    component: DramaComponent
  },
  {
    path: 'faroeste',
    component: FaroesteComponent
  },
  {
    path: 'ficcao',
    component: FiccaoComponent
  },
  {
    path: 'guerra',
    component: GuerraComponent
  },
  {
    path:'terror',
    component: TerrorComponent
  },
  {
  path:'home',
  component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
