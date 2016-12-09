/*
 * Sayfa yönlendirmeleri yapan dosya
 * Adres satırına göre bileşenleri aktif ediyor
 *
 * Bu dosya bir defa yazıldıktan sonra yapacağın değişiklikler genellikle 
 * yeni bir yol (path) ve bileşen (component) eklemek olur
 * Dikkat etmen gereken iki nokta var ve ikisini de aşağıda belirttim
 *  
 */
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 1) Yönlendirme yapacağın bileşenler dahil edilmelidir
import { HeroesComponent }      from './components/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import { DashboardComponent }   from './components/dashboard.component';

const appRoutes: Routes = [
  {
    // uygulamanın ana sayfasına girenleri yönlendir
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    // 2) path: the router matches this route's path to the URL in the browser address bar (heroes).
    path: 'heroes',
    // component: the component that the router should create when navigating to this route (HeroesComponent).
    component: HeroesComponent
  },
  {
    // adres satırından değer almak için
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);