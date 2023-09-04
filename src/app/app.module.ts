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
import { PremiumComponent } from './pages/premium/premium.component';
import { V1Component } from './pages/v1/v1.component';
import { NavbarPremiumComponent } from './components/premium/navbar-premium/navbar-premium.component';
import { HeaderAnimationPremiumComponent } from './components/premium/header-animation-premium/header-animation-premium.component';
import { HeaderPremiumComponent } from './components/premium/header-premium/header-premium.component';
import { CasesPremiumComponent } from './components/premium/cases-premium/cases-premium.component';
import { ArtistasPremiumComponent } from './components/premium/artistas-premium/artistas-premium.component';
import { ServicosPremiumComponent } from './components/premium/servicos-premium/servicos-premium.component';
import { ContatoPremiumComponent } from './components/premium/contato-premium/contato-premium.component';
import { FooterPremiumComponent } from './components/premium/footer-premium/footer-premium.component';
import { MenuPremiumComponent } from './components/premium/menu-premium/menu-premium.component';
import { TagsPremiumComponent } from './components/premium/tags-premium/tags-premium.component';


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
    PremiumComponent,
    V1Component,
    NavbarPremiumComponent,
    HeaderAnimationPremiumComponent,
    HeaderPremiumComponent,
    CasesPremiumComponent,
    ArtistasPremiumComponent,
    ServicosPremiumComponent,
    ContatoPremiumComponent,
    FooterPremiumComponent,
    MenuPremiumComponent,
    TagsPremiumComponent,

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
