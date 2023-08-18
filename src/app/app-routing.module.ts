import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { UxComponent } from './pages/ux/ux.component';
import { FireDataComponent } from './pages/fire-data/fire-data.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContactComponent },
  { path: 'portifolio', component: PortifolioComponent },
  { path: 'user-experience', component: UxComponent},
  { path: 'fire-data', component: FireDataComponent}

  // Adicione outras rotas para as páginas aqui
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
