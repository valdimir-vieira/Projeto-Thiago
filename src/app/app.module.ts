import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AcaoComponent } from './acao/acao.component';
import { AventuraComponent } from './aventura/aventura.component';
import { ComediaComponent } from './comedia/comedia.component';
import { MatBreadcrumbModule } from 'mat-breadcrumb';
import { DesenhoComponent } from './desenho/desenho.component';
import { DramaComponent } from './drama/drama.component';
import { FiccaoComponent } from './ficcao/ficcao.component';
import { DocumentarioComponent } from './documentario/documentario.component';
import { FaroesteComponent } from './faroeste/faroeste.component';
import { GuerraComponent } from './guerra/guerra.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    
    AcaoComponent,
    AventuraComponent,
    ComediaComponent,
    DesenhoComponent,
    DramaComponent,
    FiccaoComponent,
    DocumentarioComponent,
    FaroesteComponent,
    GuerraComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
