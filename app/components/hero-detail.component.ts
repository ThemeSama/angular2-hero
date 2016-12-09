/*
 * Dosya ve bileşen isimlerinde bir standart yakalamak için aşağıdaki açıklamaları dikkate almamız gerekiyor
 * Tek kelimeli bileşenlerde bileşen adı AppComponent ve dosya adı app.component.ts
 * İki kelimeli bileşenlerde bileşen adı HeroDetailComponent ve dosya adı hero-detail.component.ts olarak ayarlanır
 * Böylece bir bileşeni modül içinde kütüphane olarak eklediğimizde dosya isminden bileşen adını anlayabiliriz
 */

//Gerekli olan kutuphaneleri dahil ediyoruz
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

// Hero modelini dahil ediyoruz
import { Hero }          from '../models/hero';
import { HeroService }   from '../service/hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: './templates/hero-detail.component.html',
  styleUrls: ['./css/hero-detail.component.css']
})
// Modül içine dahil edebilmek (import) için bileşeni dışa aktarıyoruz (export)
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}