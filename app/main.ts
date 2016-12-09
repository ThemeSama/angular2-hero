/*
 * Bu dosya sabit kalıyor sürekli böyle kaldı hep.
 * Hatırladığım kadarıyla bu dosya ile platform ayarı yapılıyor.
 * Biz uygulamamızı tarayıcıda çalıştıracağımız için platform-browser-dynamic dahil ediyoruz
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Burada uygulamanın modülünü dahil ediyoruz
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
