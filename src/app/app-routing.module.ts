import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './portfolio/portfolio.component';
import{HomeHeaderComponent} from './home-header/home-header.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AboutComponent } from './about/about.component';
import { ContactoComponent } from './contacto/contacto.component';


const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeHeaderComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'articulos', component: ArticulosComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
