//Gerekli olan kutuphaneleri dahil ediyoruz
import { Component, OnInit } from '@angular/core';
import { Router, Params }   from '@angular/router';

// Hero modelini dahil ediyoruz
import { Hero } from '../models/hero';

// Hero servisini dahil ediyoruz
import { HeroService } from '../service/hero.service';

// Yeni bir bileşen yazıyoruz.
@Component({
  // Hangi etiket ile bileşeninizi seçeceğimizi belirtiyoruz
  selector: 'my-heroes',
  /*
   * Bu yorum satırları şablonda olan detaylara yer vermektedir. heroes.component.html dosyasına göz atabilirsiniz
   *
   * <my-heroes></my-heroes> şeklinde html dosyamızda ya da diğer bileşenlerimizin html şablonlarında yer almalı
   * {{degisken_adi}} ile bileşenimizde tanımladığımız değişkenkeri sayfa içinde kullanıyoruz
   * *ngFor="let hero of heroes" burada foreach işlemi yapıyoruz. heroes dizisinde tanımlı olan her bir hero modeli kadar ekrana o etiketi yazar
   * *ngIf="selectedHero" değişken bir değer döndürüyorsa html etiketi ekrana yazılır
   * [class.selected]="hero === selectedHero" eğer şart sağlanıyorsa html çıktısı class="selected" oluyor
   * (click)="onSelect(hero)" etikete tıklandığında çağırılacak method
   * [] ile yapılan tanımlamalar tetikleme (binding) görevi görüyor
   * (ngModel) karşısında yazılan modeli güncelliyor [(ngModel)]="hero.name"
   */
  templateUrl: './templates/heroes.component.html',
  styleUrls: ['./css/heroes.component.css'],
  //eklentiye içerik sağlayanları burada belirtiyoruz. aksi halde constructor veriyi alamazdı
  providers: [HeroService]
})
// export bileşeni dışarı aktarma işini yapar böylece modül bu bileşeni kullanabilir
export class HeroesComponent implements OnInit {
  // Birden çok tanımlama yaptığımızda
  heroes: Hero[];
  //seçilen nesneyi elimizde tutup karşılaştırma yapmak ve crud işlemleri yapabilmek için bir değişken tanımlıyoruz
  selectedHero: Hero;

  // Burası sınıf çağırıldığında tetiklenen hazırlayıcı method
  constructor(
    private router: Router,
    private heroService: HeroService) {
    console.log("Çalışma sırası: constructor");
  }

  // constructor yardımıyla alınan servisin içerisindeki getHeroes methodunu çağırıyoruz
  getHeroes(): void {
    console.log("Çalışma sırası: getHeroes");
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  /* bileşen hazır olduğunda çağırılan method. 
   * Bu methodu kullanmak için bileşenimize OnInit sınıfını uygulamamız gerekir (implements OnInit)
   * constructor ile değil de bununla servisi çağırmamız gerekli
   * sonuçta sunucu ortamında servisimiz bize bileşenimizin oluşturulma zamanında yanıt vermeyecektir
   * yaşam ağacı döngüsü çok önemli https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
   */
  ngOnInit(): void {
    console.log("Çalışma sırası: ngOnInit");
    this.getHeroes();
  }

  
  // Sayfadaki li etiketine tıklandığında çağırılan method
  onSelect(hero: Hero): void {
    /*
     * Bir li etiketi seçildiğinde seçilen modelin detayları sayfada görünmeye başlar.
     * Seçiliyse seçimi kaldır özelliğini ekledim yani aynı etikete tekrar tıklanırsa gizlenir.
     */
    if( this.selectedHero == hero ) {
      this.selectedHero = null;
    } else {
      this.selectedHero = hero;
    }
  }

  /* 
   * Bu bileşen sayfasında ekleme ve silme özelliği mevcuttur. 
   * Bu tür özellikler tabiki servise bağlanarak sağlanabilir
   */
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

  // Önceki ekrana geri dönmeyi sağlar
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}