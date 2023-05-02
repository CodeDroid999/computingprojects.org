import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { LatestThinkingComponent } from './components/latest-thinking/latest-thinking.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { CorporateComponent } from './components/corporate/corporate.component';
import { WebDevComponent } from './components/web-dev/web-dev.component';
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
import { MediaAndEntertainmentComponent } from './components/media-and-entertainment/media-and-entertainment.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { RetailAndCommerceComponent } from './components/retail-and-commerce/retail-and-commerce.component';
import { LogisticsAndTransportationComponent } from './components/logistics-and-transportation/logistics-and-transportation.component';
import { BankingAndFinanceComponent } from './components/banking-and-finance/banking-and-finance.component';
import { TravelAndTourismComponent } from './components/travel-and-tourism/travel-and-tourism.component';


const routes: Routes = [
  {path:'travel-and-tourism',component:TravelAndTourismComponent},
  { path: 'banking-and-finance', component: BankingAndFinanceComponent },
  { path: 'logistics-and-transportation', component: LogisticsAndTransportationComponent },
  { path: 'retail-and-commerce', component: RetailAndCommerceComponent },
  { path: 'real-estate', component: RealEstateComponent },
  { path: 'media-and-entertainment', component: MediaAndEntertainmentComponent },
  { path: 'manufacturing', component: ManufacturingComponent },
  { path: 'healthcare', component: HealthcareComponent },
  { path: 'automotive', component: AutomotiveComponent },
  { path: 'cloud-computing', component: CloudComputingComponent },
  { path: 'artificial-intelligence', component: ArtificialIntelligenceComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'internet-of-things', component: InternetOfThingsComponent },
  { path: 'big-data-and-analytics', component: BigDataComponent },
  { path: 'quality-assurance', component: QualityAssuranceComponent },
  { path: 'consulting', component: ItConsultingComponent },
  { path: 'software-development', component: SoftwareDevelopmentComponent },
  { path: 'mobile-app-development', component: AppDevelopmentComponent },
  { path: 'web-development', component: WebDevComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'corporate', component: CorporateComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'latest-thinking', component: LatestThinkingComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
