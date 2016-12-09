//Gerekli olan kutuphaneleri dahil ediyoruz
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../models/hero';

/*
 * Sistemi servis yapısına geçiriyoruz. Burada modelimize uygun verileri hazırlıyoruz.
 * İster webservice ister restservice ya da statik şekilde
 */
@Injectable()
export class HeroService {
  // Web API URL
  private heroesUrl = 'app/heroes';

  // Döndüreceğimiz içeriğin tipini belirtiyoruz
  private headers = new Headers({'Content-Type': 'application/json'});

  /*
   * Eğer servis çalışırken karşı taraftan hata gelirse
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /*
   * Servis çalıştığında http değişkenimizi ayarlıyoruz
   * Bu değişken bizim için çok önemli çünkü rest api özelliklerini bu değişken sayesinde elde edeceğiz
   * Aslında bu değişken bir sınıf ve bize çeşitli methodlar sunuyor. Aşağıdan bu detaylara bakılabilir
   * https://angular.io/docs/ts/latest/api/http/index/Http-class.html
   * Bu sayfada bulunan detaylar serviste yazılan aşağıdaki methodlarında açıklamalarını ve detaylarını içerecektir.
   */
  constructor(private http: Http) { }

  /*
   * Burası rest apinin tüm değerleri aldığı ve uygulamaya sunduğu kısım
   * http den sonrasını aydınlatalım
   *   get(url: string, options?: RequestOptionsArgs) : Observable<Response>
   *     Biz get methodunda özel ayarlamalar yapmadık sadece url yi gösterdik
   *   toPromise()
   *     Senkron olmayan verileri çekerken ihtiyaç duyuyoruz. Böylece karşı taraftan cevap bekleniyor
   *   then(response => response.json().data as Hero[])
   *     Modelimize uygun olarak verileri hazırlıyor. Then ile şart yazıyoruz sanırım tam alışamadım
   *   .catch(this.handleError);
   *     Hata yakalarsa o hatalar ile ne yapacağımıza karar veriyoruz. Gerekli mi derseniz bence gerekli olabilir.
   *     Yoğun bir uygulamamız varsa ve servis cevap veremiyorsa mevcut kullanıcıyı biraz bekletip tekrar verilere ulaşmasını denettirebiliriz.
   *     Baktık birkaç defa alamıyor o zaman güzel bir uyarı ile adamı uğurlarız :P
   */
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  // Bu methodun espirisi üstteki methoda şart gönderip tek kayıt getirmeyi sağlıyor
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }

  /*
   * Güncelleme methodunda durum farklı burada get değil put kullanılacak
   * put(url, JSON.stringify(hero), {headers: this.headers})
   * JSON.stringify javascript e özeldir. Tüm form verilerini gönderirkende kullanılır.
   * Biz seçtiğimiz hero yu güncellerken güncel modelimizi gönderiyoruz eski modeldeki tüm veriler güncelleniyor
   */
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  /*
   * Yeni bir kayıt eklerken post ile göndermemiz gerektiğini hepimiz biliyoruz.
   * Burada sadece modelimizde isim gönderiyoruz. Id kendisi oluşturuluyor nasıl oluşturuyor anlamadım ama :D
   * Büyük ihtimalle in-memory-data.service.ts dosyasında çağırdığımız method bizim uygulamamızın erişebilmesi için servis başlatıyordur
   * post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
   */
  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  /*
   * ID ye göre kayıt siliniyor
   * delete(url, {headers: this.headers})
   * Tabiki burada ne yetki ne de şart var biz sadece servise istekte bulunuyoruz karşı taraf bu taleplere cevap vermeyebilir
   */
  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}