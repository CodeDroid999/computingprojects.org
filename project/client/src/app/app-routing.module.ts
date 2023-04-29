import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { LatestThinkingComponent } from './components/latest-thinking/latest-thinking.component';
import { IndustriesComponent } from './components/industries/industries.component';

const routes: Routes = [
  {path: 'industries', component: IndustriesComponent},
  {path: 'latest-thinking', component: LatestThinkingComponent},
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
