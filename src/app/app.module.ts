import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarService } from './services/sidebar.service';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { CoursersComponent } from './pages/coursers/coursers.component';
import { FireDataComponent } from './pages/fire-data/fire-data.component';
import { UxComponent } from './pages/ux/ux.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuPopupComponent } from './components/menu-popup/menu-popup.component';
import { BannerHeaderComponent } from './components/banner-header/banner-header.component';
import { CaseSucessoComponent } from './components/case-sucesso/case-sucesso.component';
import { TagComponent } from './components/tag/tag.component';
import { TitleSectionComponent } from './components/title-section/title-section.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './components/client-list/client-list.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreloadingComponent } from './components/preloading/preloading.component';
import { RocketComponent } from './components/rocket/rocket.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContentComponent,
    SidebarComponent,
    PortifolioComponent,
    ArchiveComponent,
    CoursersComponent,
    FireDataComponent,
    UxComponent,
    ContactComponent,
    MenuPopupComponent,
    BannerHeaderComponent,
    CaseSucessoComponent,
    TagComponent,
    TitleSectionComponent,
    CardViewComponent,
    ClientListComponent,
    CardListComponent,
    FooterComponent,
    PreloadingComponent,
    RocketComponent,
    SobreComponent,
    LogoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
