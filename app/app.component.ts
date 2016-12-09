/* 
 * Uygulamanın ana bileşeni
 * index.html sayfasında my-app bileşeninin kullanıldığını görebilirsiniz
 * Bu bileşene de components dizini altında yer verebilirdik 
 * ama ana bileşen olduğundan tercih etmedim
 */

// Gerekli kütüphaneleri dahil ediyoruz
import { Component } from '@angular/core';

/* my-app bileşenini yaziyoruz
 * Bileşen yazarken kullanabileceğimiz diğer detaylara 
 * https://angular.io/docs/ts/latest/api/core/index/Component-decorator.html
 * adresinden erişebilirsiniz
 * @ işaretini tıpkı java daki annotation gibi düşünebiliriz. ng2 de decorator olarak geçiyor
 * Tüm decorator ayarları ve detayları için https://angular.io/docs/ts/latest/api/#!?apiType=Decorator
 */
@Component({
  // bilesenin my-app isminde oldugunu belirtiyor <my-app></my-app>
  selector: 'my-app',
  // bilesenin html şablonu
  templateUrl: './templates/app.component.html'
})
// bileşeni modülün içeri (import) aktarabilmesi için dışarı (export) aktarıyoruz
export class AppComponent {
  title = 'Tour of Heroes';
}