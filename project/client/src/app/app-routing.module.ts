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


const routes: Routes = [
  {path:'quality-assurance', component:QualityAssuranceComponent},
  {path: 'consulting' , component:ItConsultingComponent },
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
