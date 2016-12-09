//Gerekli olan kutuphaneleri dahil ediyoruz
import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent }     from './components/heroes.component';
import { DashboardComponent }  from './components/dashboard.component';
import { HeroSearchComponent }  from './components/hero-search.component';
import { HeroService }         from './service/hero.service';
import { routing }             from './app.routing';

//Yeni modül tanımlıyoruz
@NgModule({
  //burada dosyaya dahil ettiğimiz kütüphaneleri modüle dahil ediyoruz
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  //burada dosyaya dahil ettiğimiz bileşenleri modüle dahil ediyoruz
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  // burada modülümüze içerik sağlayıcıların yani servislerin adını tanımlıyoruz
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }