import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';


const appRoutes: Routes = [
	{path: '', component: AboutmeComponent},
	{path: 'about-me', component: AboutmeComponent},
	{path: 'contact',component: ContactComponent},
	{path: 'resume',component: ResumeComponent},
	{path: 'portfolio',component: PortfolioComponent},
	{path: '**',component: AboutmeComponent}
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);