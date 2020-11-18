import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MeComponent } from './me/me.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeComponent,
    FooterComponent,
    PortfolioComponent,
    HomeHeaderComponent,
    ArticulosComponent,
    AboutComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
