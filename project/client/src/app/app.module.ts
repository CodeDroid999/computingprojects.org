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
import { BigDataComponent } from './components/big-data/big-data.component';
import { InternetOfThingsComponent } from './components/internet-of-things/internet-of-things.component';
import { BlockchainComponent } from './components/blockchain/blockchain.component';
import { ArtificialIntelligenceComponent } from './components/artificial-intelligence/artificial-intelligence.component';
import { CloudComputingComponent } from './components/cloud-computing/cloud-computing.component';
import { AutomotiveComponent } from './components/automotive/automotive.component';
import { HealthcareComponent } from './components/healthcare/healthcare.component';
import { ManufacturingComponent } from './components/manufacturing/manufacturing.component';
import { BankingAndFinanceComponent } from './components/banking-and-finance/banking-and-finance.component';
import { MediaAndEntertainmentComponent } from './components/media-and-entertainment/media-and-entertainment.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { RetailAndCommerceComponent } from './components/retail-and-commerce/retail-and-commerce.component';
import { LogisticsAndTransportationComponent } from './components/logistics-and-transportation/logistics-and-transportation.component';
import { TravelAndTourismComponent } from './components/travel-and-tourism/travel-and-tourism.component';
import { EducationAndElearningComponent } from './components/education-and-elearning/education-and-elearning.component';



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
    QualityAssuranceComponent,
    BigDataComponent,
    InternetOfThingsComponent,
    BlockchainComponent,
    ArtificialIntelligenceComponent,
    CloudComputingComponent,
    AutomotiveComponent,
    HealthcareComponent,
    ManufacturingComponent,
    BankingAndFinanceComponent,
    MediaAndEntertainmentComponent,
    RealEstateComponent,
    RetailAndCommerceComponent,
    LogisticsAndTransportationComponent,
    TravelAndTourismComponent,
    EducationAndElearningComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
