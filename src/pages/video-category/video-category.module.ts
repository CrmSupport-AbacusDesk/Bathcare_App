import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoCategoryPage } from './video-category';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    VideoCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoCategoryPage),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
})
export class VideoCategoryPageModule {}