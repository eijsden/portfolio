import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule,
  MatSidenavModule,
  MatToolbarModule, MatTreeModule
} from '@angular/material';

import { AboutComponent } from './views/about/about.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { InfoCardPanelComponent } from './info-card-panel/info-card-panel.component';
import { InfoCardAccordionComponent } from './info-card-accordion/info-card-accordion.component';
import { TreeComponent } from './tree/tree.component';
import {BoxAndWeaveModule} from "./box-and-weave/box-and-weave.module";
import { AstroidsEvolvedModule } from './astroids-evolved/astroids-evolved.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    SidenavComponent,
    AppComponent,
    AboutComponent,
    HomeComponent,
    InfoCardComponent,
    InfoCardPanelComponent,
    InfoCardAccordionComponent,
    TreeComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatTreeModule,
    BoxAndWeaveModule,
    AstroidsEvolvedModule,
    RouterModule.forRoot(routes),


  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
