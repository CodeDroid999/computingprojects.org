import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FootnavComponent } from './components/footnav/footnav.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlueNavComponent } from './components/blue-nav/blue-nav.component';
import { LatestThinkingComponent } from './components/latest-thinking/latest-thinking.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { CorporateComponent } from './components/corporate/corporate.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ServicesSecComponent } from './components/services-sec/services-sec.component';
import { BrandsSectionComponent } from './components/brands-section/brands-section.component';
import { BadgesSecComponent } from './components/badges-sec/badges-sec.component';
import { WebDevComponent } from './components/web-dev/web-dev.component';
import { DevelopmentProcSecComponent } from './components/development-proc-sec/development-proc-sec.component';
import { AppDevelopmentComponent } from './components/app-development/app-development.component';
import { SoftwareDevelopmentComponent } from './components/software-development/software-development.component';
import { ItConsultingComponent } from './components/it-consulting/it-consulting.component';
import { QualityAssuranceComponent } from './components/quality-assurance/quality-assurance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FootnavComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    ServicesComponent,
    FooterComponent,
    BlueNavComponent,
    LatestThinkingComponent,
    IndustriesComponent,
    SolutionsComponent,
    CorporateComponent,
    WhyUsComponent,
    ServicesSecComponent,
    BrandsSectionComponent,
    BadgesSecComponent,
    WebDevComponent,
    DevelopmentProcSecComponent,
    AppDevelopmentComponent,
    SoftwareDevelopmentComponent,
    ItConsultingComponent,
    QualityAssuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
