# Angular Hızlı Başlangıç Kaynağı
[![Build Status][travis-badge]][travis-badge-url]

Arkadaşlarım için Türkçe açıklamalarla detaylandırdığım NG2 örnek uygulamasıdır. Sublime Text 3 kullanmanızı tavsiye ederim. Proje yapısını ona göre ayarladım. İnceleyip anlam veremediğiniz kısımları direk olarak bana iletirseniz gerekli açıklamaları eklerim :)

Bu dosya [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html) anlatılan TypeScript kaynak kodlarını ve örnek uygulamasını içerir,
bu sayede Angular dünyasına en temel özelliklerin anlatıldığı güzel bir başlangıç yapmış olursunuz.

## Gereklilikler

Node.js ve npm Angular geliştirmek için gereklidir. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Buradan elde et</a> eğer yüklü değilse. Bunu yapacak kadar ingilizcen vardır heralde :)
 
**Yüklediysen kontrol et node `v4.x.x` ve npm `3.x.x`**
Terminalde bu komutları çalıştırarak kontrol edebilirsin `node -v` ve `npm -v` 
Daha düşük sürümlerde sıkıntı çıkarabilir.

## Create a new project based on the QuickStart

Bu projeyi kopyalamak için (mesela., `my-proj`).
```bash
git clone  https://github.com/ThemeSama/angular2-hero  my-proj
cd my-proj
```

## npm paketlerini yüklemek için
**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

> Eğer `typings` dizini `npm install` işleminin ardından gelmezse lütfen kendin yükle:

> `npm run typings -- install`

Sorunsuzca yüklendiyse artık uygulamayı denemeye hazırsın demektir.

### npm komutları

* `npm start` - ile çalıştır ve yaptığın değişikliklerde derlemesini izle.


Sunucuyu kapatmak için Ctrl-C kambinasyonunu kullan.

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart
